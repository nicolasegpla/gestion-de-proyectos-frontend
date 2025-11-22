import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { Login } from '@/presentation/views';
import { Register } from '@/presentation/views';

interface UseRoutesProviderProps {
    token: boolean;
}

export const useRouterProvider = ({ token }: UseRoutesProviderProps) => {
    const Dashboard = lazy(() => import('../views/Dashboard/Dashboard'));
    const Historias = lazy(() => import('../views/Hitorias/Hitorias'));
    const Tikets = lazy(() => import('../views/Tikets/Tikets'));

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
            {
                path: '/dashboard',
                element: token ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Dashboard />
                    </Suspense>
                ) : (
                    <Navigate to="/login" replace />
                ),
            },
            {
                path: '/historias',
                element: token ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Historias />
                    </Suspense>
                ) : (
                    <Navigate to="/login" replace />
                ),
            },
            {
                path: '/tickets',
                element: token ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Tikets />
                    </Suspense>
                ) : (
                    <Navigate to="/login" replace />
                ),
            },
        ]);

        return routes;
    };

    return {
        AppRoutes,
    };
};
