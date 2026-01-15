import { useNavigate } from 'react-router-dom';

export const useNavigateService = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    };

    const goToRegister = () => {
        navigate('/register');
    };

    const goToDashboard = () => {
        navigate('/dashboard');
    };

    const defaultNavigate = (path: string) => {
        navigate(path);
    };

    return {
        goToLogin,
        goToDashboard,
        goToRegister,
        defaultNavigate,
    };
};
