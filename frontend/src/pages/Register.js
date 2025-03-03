import React, { useState } from "react";
import { registerUser } from "../api/userApi";  // Ensure this path is correct
import Navbar from "../components/Navbar";  // Adjusted import path

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();  // Prevent default form submission behavior
        const userData = { username: name, email, password };
        await registerUser(userData);
    };

    return (
        <>
            <Navbar />  {/* ✅ Added Navbar component here */}
            <div className="register-container p-6 max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handleRegister} className="flex flex-col space-y-3">
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required 
                        className="border p-2 rounded" />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required 
                        className="border p-2 rounded" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required 
                        className="border p-2 rounded" />
                    <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default Register;
