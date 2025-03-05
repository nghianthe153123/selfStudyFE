import api from './api';

const API_URL = 'http://localhost:8080';

export const login = async (username: string, password: string) => {
    try {
        const response = await api.post(`${API_URL}/login`, { username, password });
        const sessionId = response.data; // Lấy sessionId từ backend
        localStorage.setItem('sessionId', sessionId); // Lưu sessionId vào localStorage
        return sessionId;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};
