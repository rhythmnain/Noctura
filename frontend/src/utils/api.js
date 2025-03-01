import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchExcuses = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/excuses/random`);
        return response.data.excuse;
    } catch (error) {
        console.error("Error fetching excuses:", error);
        return "No excuse available at the moment.";
    }
};