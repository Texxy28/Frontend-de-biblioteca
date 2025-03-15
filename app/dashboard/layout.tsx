"use client"; 

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PrivateLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login");
        } else {
            setIsAuthenticated(true);
        }
    }, [router]);

    if (!isAuthenticated) return null;

    return <>{children}</>;
}