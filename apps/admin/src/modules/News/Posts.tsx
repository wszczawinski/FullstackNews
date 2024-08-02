import { useEffect } from "react";

import { Post } from "@packages/types";

import { CategorySelect } from "@/modules/News/CategorySelect";
import { HomePagination } from "@/components/HomePagination";

import { NewsList } from "./NewsList";

export const Posts = ({ posts }: { posts: Post[] }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    scrollToTop();
  }, [posts]);

  return (
    <section className="flex flex-col gap-4 min-h-full">
      <div className="flex w-full flex-col items-start justify-end rounded-md gap-4 sm:flex-row sm:items-center">
        <CategorySelect />
      </div>
      <div className="grow flex flex-col gap-4">
        <NewsList posts={posts} />
      </div>
      <HomePagination />
    </section>
  );
};
