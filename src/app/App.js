import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import { PresentacionalContextProvider } from '@/presentation/context/PresentacionalContext';
import { useRouterProvider } from '@/presentation/routes/useRoutesProvider';
import { useTokenStore } from '@/store/zustand/useTokenStore';
import './App.scss';
function AppContent() {
    const { isAuthenticated } = useTokenStore();
    const { AppRoutes } = useRouterProvider({ token: isAuthenticated });
    return (_jsx(_Fragment, { children: _jsx(AppRoutes, {}) }));
}
function App() {
    return (_jsx(_Fragment, { children: _jsx(BrowserRouter, { children: _jsx(PresentacionalContextProvider, { children: _jsx(AppContent, {}) }) }) }));
}
export default App;
