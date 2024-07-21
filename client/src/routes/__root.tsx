import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { QueryClient } from "@tanstack/react-query";
import { Footer, Hero, MainContent, Navbar } from "@/layout";
import { Toaster } from "@/components/ui/toaster";
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
      <Hero />
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
