import { BrowserRouter } from 'react-router-dom';

import { PresentacionalContextProvider } from '@/presentation/context/PresentacionalContext';
import { useRouterProvider } from '@/presentation/routes/useRoutesProvider';
import { useTokenStore } from '@/store/zustand/useTokenStore';

import './App.scss';

function AppContent() {
    const { isAuthenticated } = useTokenStore();
    const { AppRoutes } = useRouterProvider({ token: isAuthenticated });
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
                <PresentacionalContextProvider>
                    <AppContent />
                </PresentacionalContextProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
