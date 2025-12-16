import axios from 'axios';

//Function to handle authentication login to business account
export const authLoginBusiness = async (
    data: { email_contacto: string; password: string },
    url: string
) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error: any) {
        console.error('Error en login:', error.response?.data || error.message);
        throw error;
    }
};

//Function to handle authentication login to user account
export const authLoginUser = async (data: { email: string; password: string }, url: string) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error: any) {
        console.error('Error en login:', error.response?.data || error.message);
        throw error;
    }
};
