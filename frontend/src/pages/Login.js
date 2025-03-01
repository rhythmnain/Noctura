import React, { useState } from "react";
import { loginUser } from "../api/userApi";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        email.preventDefault();
        try {
            const data = await loginUser({ email, password });
            console.log(data);
        } catch (error) {
            alert("Login Failed");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <from onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
            </from>
        </div>
    );
};

export default Login;