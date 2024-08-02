import { Post } from "@packages/types";

import { PostCard } from "./PostCard";

export const NewsList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      {posts?.map((post) => <PostCard post={post} key={post.id} />)}
    </div>
  );
};
