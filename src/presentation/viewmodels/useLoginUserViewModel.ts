//custom hook to handle business login logic
import React, { useState } from 'react';

import { useNavigateService } from '../routes/useNavigateService';
import { validateEmailInput } from '../utils/validators';

import { authLoginUser } from '@/infrastructure/api';
import { useTokenStore } from '@/store/zustand/useTokenStore';

export const useLoginUserViewModel = () => {
    const { setToken } = useTokenStore();

    const [loginUsuario, setLoginUsuario] = useState({
        email: '',
        password: '',
    });

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
            alert('Invalid email format');
            return;
        }

        try {
            const response = await authLoginUser(
                loginUsuario,
                `${import.meta.env.VITE_URL_BASE}/usuarios/usuarios/login`
            );
            console.log('Login empresa:', response);
            setLoginUsuario({
                email: '',
                password: '',
            });
            setToken(response.access_token);
            goToDashboard();
        } catch (error: any) {
            console.error(
                'Error al hacer login con empresa:',
                error.response?.data || error.message
            );
            throw error;
        }
    };
    return {
        loginUsuario,
        setLoginUsuario,
        isLoadingUser,
        errorUser,
        handleLoginUser,
        dataInputsFieldUsuario,
    };
};
