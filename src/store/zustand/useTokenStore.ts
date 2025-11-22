// useTokenStore.ts
import { create } from 'zustand';

interface TokenState {
    token: string | null;
    setToken: (token: string | null) => void;
    isAuthenticated: boolean;
}

export const useTokenStore = create<TokenState>((set) => ({
    token: sessionStorage.getItem('session')
        ? JSON.parse(sessionStorage.getItem('session')!).token
        : null,
    isAuthenticated: !!sessionStorage.getItem('session'),
    setToken: (token) => {
        if (token) {
            sessionStorage.setItem('session', JSON.stringify({ token }));
        } else {
            sessionStorage.removeItem('session');
        }
        set({ token, isAuthenticated: !!token });
    },
}));
