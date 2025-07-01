import React from "react";
import ReactDOM from "react-dom/client";
import { compress, decompress } from "lz-string";

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import {
  persistQueryClient,
  removeOldestQuery,
} from "@tanstack/react-query-persist-client";

// 💡 route tree - run project to auto-generate
import { routeTree } from "./routeTree.gen";

import { useAuth } from "@/context/useAuth";
import { AuthContextProvider } from "@/context/AuthContextProvider";

import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 60 * 1000, // 5m
      gcTime: 24 * 60 * 60 * 1000, // 24h
    },
  },
});

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
  retry: removeOldestQuery,
  serialize: (data) => compress(JSON.stringify(data)),
  deserialize: (data) => JSON.parse(decompress(data)),
});

persistQueryClient({
  queryClient,
  persister: localStoragePersister,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7d
});

const router = createRouter({
  routeTree,
  context: {
    queryClient,
    auth: undefined!,
  },
  defaultPreloadStaleTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  const auth = useAuth();
  return <RouterProvider router={router} context={{ queryClient, auth }} />;
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
