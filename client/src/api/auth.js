import axios from 'axios';

const API = 'http://localhost:3001/api';


export const registerRequest = async (user) => {
    let info = {
        email: user.email,
        password: user.password,
        username: user.username
    };

    try {
        const res = await axios.post(`${API}/register`, info);
        return res.data;
    } catch (error) {
        console.error('Error en la petición:', error);
        throw error;
    }
};
