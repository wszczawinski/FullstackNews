export interface AuthResponse {
    expiresAt: string | null;
}

export interface LoginRequest {
    email: string;
    password: string;
}
