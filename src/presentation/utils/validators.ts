export const validateEmailInput = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePasswordInput = (password: string): boolean => {
    if (!password) return false;
    if (password.length > 60) return false;
    return true;
};
