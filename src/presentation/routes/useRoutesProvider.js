import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Login } from '@/presentation/views';
import { Register } from '@/presentation/views';
export const useRouterProvider = ({ token }) => {
    const Dashboard = lazy(() => import('../views/Dashboard/Dashboard'));
    const Historias = lazy(() => import('../views/Hitorias/Hitorias'));
    const Tikets = lazy(() => import('../views/Tikets/Tikets'));
    const AppRoutes = () => {
        let routes = useRoutes([
            {
                path: '/',
                element: _jsx(Navigate, { to: "/login", replace: true }),
            },
            {
                path: '/login',
                element: _jsx(Login, {}),
            },
            {
                path: '/register',
                element: _jsx(Register, {}),
            },
            {
                path: '/dashboard',
                element: token ? (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Dashboard, {}) })) : (_jsx(Navigate, { to: "/login", replace: true })),
            },
            {
                path: '/historias',
                element: token ? (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Historias, {}) })) : (_jsx(Navigate, { to: "/login", replace: true })),
            },
            {
                path: '/tickets',
                element: token ? (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Tikets, {}) })) : (_jsx(Navigate, { to: "/login", replace: true })),
            },
        ]);
        return routes;
    };
    return {
        AppRoutes,
    };
};
