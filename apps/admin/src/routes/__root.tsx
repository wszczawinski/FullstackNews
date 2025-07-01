import { createRootRouteWithContext, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient } from "@tanstack/react-query";

import { Toaster } from "@packages/ui";

import { AuthContextProps } from "@/context/AuthContext";
import { useAuth } from "@/context/useAuth";
import { useEffect } from "react";

interface MyRouterContext {
    auth: AuthContextProps;
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    component: RootComponent,
});

function RootComponent() {
    const navigate = useNavigate();
    const { location } = useRouterState()
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated && location.pathname !== "/") {
            navigate({ to: "/", replace: true });
        }

        if (isAuthenticated && location.pathname === "/") {
            navigate({ to: "/panel", replace: true });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    return (
        <>
            <Outlet />
            <Toaster />

            <ReactQueryDevtools buttonPosition="bottom-left" />
            <TanStackRouterDevtools position="bottom-right" />
        </>
    );
}
