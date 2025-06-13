import { z } from "zod";
import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Spinner } from "@packages/ui";

import { postsQueryOptions } from "@/services/queries";
import { Posts } from "@/modules/News/Posts";

const newsSearchSchema = z.object({
    page: z.number().catch(1),
    category: z.string().catch("all"),
});

type HomeParams = z.infer<typeof newsSearchSchema>;

const PostsPage = () => {
    const { page } = Route.useSearch();
    const { data: posts } = useSuspenseQuery(postsQueryOptions({ page }));

    return <Posts posts={posts} />;
}

export const Route = createFileRoute("/panel/news")({
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
