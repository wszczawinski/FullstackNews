import {createContext} from "react";

import {LoginRequest} from "@packages/types";

export interface AuthContextProps {
    isAuthenticated: boolean;
    expiresAt: Date | null;
    login: (data: LoginRequest) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);
