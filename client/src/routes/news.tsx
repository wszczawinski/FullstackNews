import { z } from "zod";
import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";

import { postsQueryOptions } from "@/services/queries";
import { Spinner } from "@/components/ui/spinner";
import { Posts } from "@/modules/News/Posts";

const newsSearchSchema = z.object({
  page: z.number().catch(1),
  category: z.string().catch("all"),
});

type HomeParams = z.infer<typeof newsSearchSchema>;

export const Route = createFileRoute("/news")({
  validateSearch: (search) => newsSearchSchema.parse(search),
  loaderDeps: (search): HomeParams => newsSearchSchema.parse(search),
  loader: ({ context: { queryClient }, deps: { page } }) => {
    return queryClient.ensureQueryData(postsQueryOptions({ page }));
  },
  pendingComponent: () => (
    <div className="h-80 flex flex-col items-center justify-center">
      <Spinner size={"large"} />
    </div>
  ),
  errorComponent: () => (
    <div className="h-80 flex flex-col items-center justify-center">
      Error occured
    </div>
  ),
  component: PostsPage,
});

function PostsPage() {
  const { page } = Route.useSearch();
  const { data: posts } = useSuspenseQuery(postsQueryOptions({ page }));

  return <Posts posts={posts} />;
}
