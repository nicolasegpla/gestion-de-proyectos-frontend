import { BrowserRouter } from 'react-router-dom';

import { useRouterProvider } from '@/presentation/routes/useRoutesProvider';

import './App.scss';

function AppContent() {
    const { AppRoutes } = useRouterProvider({ token: false });
    return (
        <>
            <AppRoutes />
        </>
    );
}

function App() {
    return (
        <>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </>
    );
}

export default App;
