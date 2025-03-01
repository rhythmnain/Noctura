//user api calls
import axiosInstance from "./axiosConfig";

// Register User
export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/users/register", userData);
  return response.data;
};

// Login User
export const loginUser = async (credentials) => {
  const response = await axiosInstance.post("/users/login", credentials);
  return response.data;
};

// Fetch User Profile
export const fetchUserProfile = async (token) => {
  const response = await axiosInstance.get("/users/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
