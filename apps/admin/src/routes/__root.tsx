import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";

import { Toaster } from "@packages/ui";

import { Footer, MainContent, Navbar } from "@/layout";
import { AuthContext } from "@/context/authContext";

interface MyRouterContext {
  auth: AuthContext;
  queryClient: QueryClient;
}
export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />

      <Toaster />

      <ReactQueryDevtools buttonPosition="top-right" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
