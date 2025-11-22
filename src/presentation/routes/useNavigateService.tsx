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

    const goToHistorias = () => {
        navigate('/historias');
    };

    const goToTickets = () => {
        navigate('/tickets');
    };

    return {
        goToLogin,
        goToDashboard,
        goToRegister,
        goToHistorias,
        goToTickets,
    };
};
