//custom hook to handle business login logic
import { useState } from 'react';

import { useNavigateService } from '../routes/useNavigateService';
import { validateEmailInput } from '../utils/validators';

import { authLoginBusiness } from '@/infrastructure/api';
import { useTokenStore } from '@/store/zustand/useTokenStore';

export const useLoginBusinessViewModel = () => {
    const { setToken } = useTokenStore();

    const [loginEmpresa, setLoginEmpresa] = useState({
        email_contacto: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { goToDashboard } = useNavigateService();

    const handleLoginBusiness = async () => {
        setIsLoading(true);
        setError(null);

        if (!validateEmailInput(loginEmpresa.email_contacto)) {
            setIsLoading(false);
            setError('Invalid email format');
            alert('Invalid email format');
            return;
        }

        try {
            const response = await authLoginBusiness(
                loginEmpresa,
                `${import.meta.env.VITE_URL_BASE}/auth/auth/login`
            );
            console.log('Login empresa:', response);
            setLoginEmpresa({
                email_contacto: '',
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
        loginEmpresa,
        setLoginEmpresa,
        isLoading,
        error,
        handleLoginBusiness,
    };
};
