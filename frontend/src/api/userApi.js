//user api calls
import api from "./axiosConfig";

export const loginUser = async (userData) => {
    try {
        const response = await api.post("/api/auth/login", userData);
        return response.data;
    } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
        throw error;
}
};