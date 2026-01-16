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

interface NameState {
    nameUser: string | null;
    setNameUser: (name: string | null) => void;
}

export const useNameStore = create<NameState>((set) => ({
    nameUser: sessionStorage.getItem('session-name')
        ? JSON.parse(sessionStorage.getItem('session-name')!).name
        : null,
    setNameUser: (name) => {
        if (name) {
            sessionStorage.setItem('session-name', JSON.stringify({ name }));
        } else {
            sessionStorage.removeItem('session-name');
        }
        set({ nameUser: name });
    },
}));

interface RollState {
    rollUser: string | null;
    setRollUser: (roll: string | null) => void;
}

export const useRollUser = create<RollState>((set) => ({
    rollUser: sessionStorage.getItem('session-roll')
        ? JSON.parse(sessionStorage.getItem('session-roll')!).roll
        : null,
    setRollUser: (roll) => {
        if (roll) {
            sessionStorage.setItem('session-roll', JSON.stringify({ roll }));
        } else {
            sessionStorage.removeItem('session-roll');
        }
        set({ rollUser: roll });
    },
}));
