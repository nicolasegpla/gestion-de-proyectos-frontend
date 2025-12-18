export const validateEmailInput = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePasswordInput = (password: string): boolean => {
    if (!password) return false;
    if (password.length > 60) return false;
    if (password.length < 8) return false;
    return /^\S+$/.test(password);
};

export const validateNameInput = (name: string): boolean => {
    if (!name) return false;
    if (name.length > 120) return false;
    return true;
};
