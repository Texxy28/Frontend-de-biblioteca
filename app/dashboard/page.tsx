"use client"

import Navbar from "@/components/NavBar";
import axios from "axios";
import { useEffect } from "react";

export default function Dashboard() {

    useEffect(() => {

        const fetchUsers = async () => {
            const token = localStorage.getItem("token");
            await axios.get("http://localhost:8080/api/v1/user", {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(res => console.log(res.data))
            .catch(error => console.log(error));
        }

        fetchUsers();

    })

    return (

        <div>
            <h1>Dashboard</h1>

            <Navbar/>

        </div>

    )

}