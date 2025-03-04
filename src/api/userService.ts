import api from './api';

const API_URL = 'http://localhost:8080';

export const saveUser = async (user: { username: string; password: string }) => {
    try {
        const response = await api.post(`${API_URL}/auth/save`, user);
        return response.data;
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
};