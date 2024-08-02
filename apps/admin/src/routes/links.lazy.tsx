import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/links")({
  component: () => <div>Hello /links!</div>,
});
