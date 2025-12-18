import axios from 'axios';

//Function to handle registration of business account
export const resgisterBusiness = async (
    data: { nombre: string; email_contacto: string; password: string },
    url: string
) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error: any) {
        console.error('Error en registro:', error.response?.data || error.message);
        throw error;
    }
};
