import { createContext, useState } from "react";

import { LoginData } from "@/services/api";
import { useAuthLogin, useAuthLogout } from "@/services/mutations";

export type AuthContext = {
  isAuthenticated: boolean;
  login: (data: LoginData) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const { mutate: login } = useAuthLogin({ onSuccess: onLoginSuccess });

  const onLogoutSuccess = () => {
    setIsAuthenticated(false);
  };

  const { mutate: logout } = useAuthLogout({ onSuccess: onLogoutSuccess });

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
