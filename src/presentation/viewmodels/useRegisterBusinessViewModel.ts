import React, { useEffect, useState } from 'react';

import { useNavigateService } from '../routes/useNavigateService';
import { validateEmailInput, validateNameInput, validatePasswordInput } from '../utils/validators';

import { resgisterBusiness } from '@/infrastructure/api';

export const useRegisterBusinessViewModel = () => {
    const [registerEmpresa, setRegisterEmpresa] = useState({
        nombre: '',
        email_contacto: '',
        password: '',
    });

    const clearInputs = () => {
        setRegisterEmpresa({
            nombre: '',
            email_contacto: '',
            password: '',
        });
    };

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [resgisterSuccess, setResgisterSuccess] = useState<boolean>(false);

    function handleChangeRegisterEmpresa(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setRegisterEmpresa({ ...registerEmpresa, [name]: value });
    }

    const dataInputsField = [
        {
            labelProps: { label: 'Nombre de la empresa' },
            inputProps: {
                name: 'nombre',
                type: 'text',
                placeholder: 'nombre de la empresa',
                value: registerEmpresa.nombre,
                onChange: handleChangeRegisterEmpresa,
            },
        },
        {
            labelProps: { label: 'Email' },
            inputProps: {
                name: 'email_contacto',
                type: 'text',
                placeholder: 'Email',
                value: registerEmpresa.email_contacto,
                onChange: handleChangeRegisterEmpresa,
            },
        },
        {
            labelProps: { label: 'Password' },
            inputProps: {
                name: 'password',
                type: 'password',
                placeholder: 'Password',
                value: registerEmpresa.password,
                onChange: handleChangeRegisterEmpresa,
            },
        },
    ];

    const { goToLogin } = useNavigateService();

    const handleRegisterBusiness = async () => {
        setIsLoading(true);
        setError(null);

        if (!validateEmailInput(registerEmpresa.email_contacto)) {
            setIsLoading(false);
            setError('Invalid email format');
            return;
        } else if (!validatePasswordInput(registerEmpresa.password)) {
            setIsLoading(false);
            setError('Invalid password format');
            return;
        } else if (!validateNameInput(registerEmpresa.nombre)) {
            setIsLoading(false);
            setError('Invalid name format');
            return;
        }

        try {
            const response = await resgisterBusiness(
                registerEmpresa,
                `${import.meta.env.VITE_URL_BASE}/auth/auth/registro`
            );
            setRegisterEmpresa({
                nombre: '',
                email_contacto: '',
                password: '',
            });
            setResgisterSuccess(true);
            return response;
        } catch (error: any) {
            setError(error.response?.data || 'Registration failed');
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
        } else if (resgisterSuccess) {
            setTimeout(() => {
                setResgisterSuccess(false);
                goToLogin();
            }, 3000);
        }
    }, [error, resgisterSuccess]);

    return {
        registerEmpresa,
        handleChangeRegisterEmpresa,
        dataInputsField,
        handleRegisterBusiness,
        isLoading,
        error,
        clearInputs,
        goToLogin,
        resgisterSuccess,
    };
};
