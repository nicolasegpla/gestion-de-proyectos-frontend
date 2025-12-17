//custom hook to handle business login logic
import React, { useEffect, useState } from 'react';

import { useNavigateService } from '../routes/useNavigateService';
import { validateEmailInput, validatePasswordInput } from '../utils/validators';

import { authLoginUser } from '@/infrastructure/api';
import { useTokenStore } from '@/store/zustand/useTokenStore';

export const useLoginUserViewModel = () => {
    const { setToken } = useTokenStore();

    const [loginUsuario, setLoginUsuario] = useState({
        email: '',
        password: '',
    });

    const clearInputs = () => {
        setLoginUsuario({
            email: '',
            password: '',
        });
    };

    const [isLoadingUser, setIsLoadingUser] = useState(false);
    const [errorUser, setErrorUser] = useState<string | null>(null);

    const handleChangeLoginUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginUsuario({
            ...loginUsuario,
            [e.target.name]: e.target.value,
        });
    };

    const dataInputsFieldUsuario = [
        {
            inputProps: {
                name: 'email',
                type: 'text',
                placeholder: 'User email address',
                value: loginUsuario.email,
                onChange: handleChangeLoginUsuario,
            },
        },
        {
            inputProps: {
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                value: loginUsuario.password,
                onChange: handleChangeLoginUsuario,
            },
        },
    ];

    const { goToDashboard } = useNavigateService();

    const handleLoginUser = async () => {
        setIsLoadingUser(true);
        setErrorUser(null);

        if (!validateEmailInput(loginUsuario.email)) {
            setIsLoadingUser(false);
            setErrorUser('Invalid email format');
            return;
        } else if (!validatePasswordInput(loginUsuario.password)) {
            setIsLoadingUser(false);
            setErrorUser('Invalid password format');
            return;
        }

        try {
            const response = await authLoginUser(
                loginUsuario,
                `${import.meta.env.VITE_URL_BASE}/usuarios/usuarios/login`
            );
            setLoginUsuario({
                email: '',
                password: '',
            });
            setToken(response.access_token);
            goToDashboard();
        } catch (error: any) {
            setErrorUser(error.response?.data.detail || error.message);
            setIsLoadingUser(false);
            throw error;
        }
    };

    useEffect(() => {
        if (errorUser) {
            const timer = setTimeout(() => {
                setErrorUser(null);
            }, 7000);

            return () => clearTimeout(timer); // Limpia timer anterior
        }
    }, [errorUser]);

    return {
        loginUsuario,
        setLoginUsuario,
        isLoadingUser,
        errorUser,
        handleLoginUser,
        dataInputsFieldUsuario,
        clearInputs,
    };
};
