// useTokenStore.ts
import { create } from 'zustand';
export const useTokenStore = create((set) => ({
    token: sessionStorage.getItem('session')
        ? JSON.parse(sessionStorage.getItem('session')).token
        : null,
    isAuthenticated: !!sessionStorage.getItem('session'),
    setToken: (token) => {
        if (token) {
            sessionStorage.setItem('session', JSON.stringify({ token }));
        }
        else {
            sessionStorage.removeItem('session');
        }
        set({ token, isAuthenticated: !!token });
    },
}));
