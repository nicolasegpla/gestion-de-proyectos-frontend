//custom hook to handle business login logic
import React, { useEffect, useState } from 'react';

import { useNavigateService } from '../routes/useNavigateService';
import { validateEmailInput, validatePasswordInput } from '../utils/validators';

import { authLoginBusiness } from '@/infrastructure/api';
import { useNameStore, useRollUser, useTokenStore } from '@/store/zustand/useTokenStore';

export const useLoginBusinessViewModel = () => {
    const { setToken } = useTokenStore();
    const { setNameUser, nameUser } = useNameStore();
    const { setRollUser, rollUser } = useRollUser();

    const [loginEmpresa, setLoginEmpresa] = useState({
        email_contacto: '',
        password: '',
    });

    const clearInputs = () => {
        setLoginEmpresa({
            email_contacto: '',
            password: '',
        });
    };

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChangeLoginEmpresa = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginEmpresa({
            ...loginEmpresa,
            [e.target.name]: e.target.value,
        });
    };

    const dataInputsFieldEmpresa = [
        {
            inputProps: {
                name: 'email_contacto',
                type: 'text',
                placeholder: 'Business email address',
                value: loginEmpresa.email_contacto,
                onChange: handleChangeLoginEmpresa,
            },
        },
        {
            labelProps: { label: 'Password' },
            inputProps: {
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                value: loginEmpresa.password,
                onChange: handleChangeLoginEmpresa,
            },
        },
    ];

    const { goToDashboard } = useNavigateService();

    const handleLoginBusiness = async () => {
        setIsLoading(true);
        setError(null);

        if (!validateEmailInput(loginEmpresa.email_contacto)) {
            setIsLoading(false);
            setError('Invalid email format');
            return;
        } else if (!validatePasswordInput(loginEmpresa.password)) {
            setIsLoading(false);
            setError('Invalid password format');
            return;
        }

        try {
            const response = await authLoginBusiness(
                loginEmpresa,
                `${import.meta.env.VITE_URL_BASE}/auth/auth/login`
            );
            setLoginEmpresa({
                email_contacto: '',
                password: '',
            });
            setToken(response.access_token);
            setNameUser(response.empresa_nombre);
            setRollUser(response.roll);
            goToDashboard();
        } catch (error: any) {
            setError(error.response?.data.detail || error.message);
            setIsLoading(false);
            throw error;
        }
    };

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => {
                setError(null);
            }, 7000);

            return () => clearTimeout(timer); // Limpia timer anterior
        }
    }, [error]);

    return {
        loginEmpresa,
        setLoginEmpresa,
        isLoading,
        error,
        handleLoginBusiness,
        dataInputsFieldEmpresa,
        clearInputs,
        nameUser,
        rollUser,
    };
};
