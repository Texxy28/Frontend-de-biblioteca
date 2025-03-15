"use client"

import axios from "axios";
import { useState } from "react";

export default function Login() {

    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/auth/login", {
                email,
                password,
            });
            console.log("logueado");
            localStorage.setItem("token", res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
}