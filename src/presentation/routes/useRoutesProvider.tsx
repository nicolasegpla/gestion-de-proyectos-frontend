import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { Login } from '@/presentation/views';
import { Register } from '@/presentation/views';

interface UseRoutesProviderProps {
    token: boolean;
}

export const useRouterProvider = ({ token }: UseRoutesProviderProps) => {
    const Dashboard = lazy(() => import('@/presentation/views/Dashboard/Dashboard'));
    const Projects = lazy(() => import('@/presentation/views/Projects/Projects'));
    const Histories = lazy(() => import('@/presentation/views/Histories/Histories'));
    const Tickets = lazy(() => import('@/presentation/views/Tickets/Tickets'));

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
                path: '/projects',
                element: token ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Projects />
                    </Suspense>
                ) : (
                    <Navigate to="/login" replace />
                ),
            },
            {
                path: '/histories',
                element: token ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Histories />
                    </Suspense>
                ) : (
                    <Navigate to="/login" replace />
                ),
            },
            {
                path: '/tickets',
                element: token ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Tickets />
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
