import { ZapOff } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Spinner } from "@packages/ui";

import { Posts } from "@/modules/News/Posts";
import { postsQueryOptions } from "@/services/queries";

export const Route = createFileRoute("/")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(postsQueryOptions({ page: 1 })),
  pendingComponent: () => (
    <div className="h-80 flex flex-col items-center justify-center">
      <Spinner size={"large"} />
    </div>
  ),
  errorComponent: () => (
    <div className="p-5 text-center flex flex-col items-center justify-center gap-6 border border-border rounded-lg">
      <div>Something went wrong with fetching the data</div>
      <ZapOff size={30} />
      <div>Please try again later or check your internet connection</div>
    </div>
  ),
  component: Home,
});

function Home() {
  const { data: posts } = useSuspenseQuery(postsQueryOptions({ page: 1 }));

  return <Posts posts={posts} />;
}
