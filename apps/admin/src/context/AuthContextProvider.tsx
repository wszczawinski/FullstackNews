import { useEffect, useMemo, useState } from "react";

import { AuthResponse } from "@packages/types/src/models/auth.ts";
import { useAuthLogin, useAuthLogout } from "@/services/mutations.ts";

import { AuthContext } from "./AuthContext.tsx";

export const AuthContextProvider = ({ children }: { children: React.ReactNode; }) => {
    const [expiresAt, setExpiresAt] = useState<Date | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedExpiresAt = localStorage.getItem("expiresAt");
        if (storedExpiresAt) {
            const date = new Date(storedExpiresAt);
            
            if (Date.now() < date.getTime()) {
                setExpiresAt(date);
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem("expiresAt");
            }
        }
    }, []);

    useEffect(() => {
        if (!expiresAt) return;

        const timeoutDuration = expiresAt.getTime() - Date.now();

        if (timeoutDuration <= 0) {
            setIsAuthenticated(false);
            setExpiresAt(null);
            localStorage.removeItem("expiresAt");
            return;
        }

        const timeout = setTimeout(() => {
            setIsAuthenticated(false);
            setExpiresAt(null);
            localStorage.removeItem("expiresAt");
        }, timeoutDuration);

        return () => clearTimeout(timeout);
    }, [expiresAt]);

    const onLoginSuccess = (response: AuthResponse) => {
        if (response.expiresAt) {
            const date = new Date(response.expiresAt);
            setExpiresAt(date);
            setIsAuthenticated(true);
            localStorage.setItem("expiresAt", date.toISOString());
        }
    };

    const { mutate: login } = useAuthLogin({ onSuccess: onLoginSuccess });

    const onLogoutSuccess = () => {
        setIsAuthenticated(false);
        setExpiresAt(null);
        localStorage.removeItem("expiresAt");
    };

    const { mutate: logout } = useAuthLogout({ onSuccess: onLogoutSuccess });

    const value = useMemo(
        () => ({
            isAuthenticated,
            expiresAt,
            login,
            logout,
        }),
        [isAuthenticated, expiresAt, login, logout]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
