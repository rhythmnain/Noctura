import React, { useState } from "react";
import { registeruser } from "../api/userApi";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await registeruser({ name, email, password });
            alert("User registered successfully!");
        } catch (error) {
            alert("Registration Failed");
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
        </div>
    );
};

export default Register;