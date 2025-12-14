import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { Login } from '@/presentation/views';
import { Register } from '@/presentation/views';

interface UseRoutesProviderProps {
    token: boolean;
}

export const useRouterProvider = ({ token }: UseRoutesProviderProps) => {
    const AppRoutes = () => {
        let routes = useRoutes([
            {
                path: '/',
                element: <Navigate to="/login" replace />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ]);

        return routes;
    };

    return {
        AppRoutes,
    };
};
