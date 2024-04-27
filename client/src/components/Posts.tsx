import { useEffect } from "react";

import { Post } from "@/services/api";

import { NewsList } from "./NewsList";
import { CategorySelect } from "./CategorySelect";
import { HomePagination } from "./HomePagination";
import { HomeBreadcrumbs } from "./HomeBreadcrumbs";

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
      <div className="flex w-full flex-col items-start justify-between rounded-md gap-4 sm:flex-row sm:items-center">
        <HomeBreadcrumbs />
        <CategorySelect />
      </div>
      <div className="grow flex flex-col gap-4">
        <NewsList posts={posts} />
      </div>
      <HomePagination />
    </section>
  );
};
