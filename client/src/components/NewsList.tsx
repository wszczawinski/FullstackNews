import { PostCard } from "./PostCard";

// import { Button } from "@/components/ui/button";
// import { useCreatePost } from "@/services/mutations";

import add1 from "@/images/posts_add_1.png";
import add2 from "@/images/posts_add_2.png";
import add3 from "@/images/posts_add_3.png";
import { Post } from "@/services/api";

export const NewsList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      {posts?.map((post, index) => (
        <>
          {index === 0 && (
            <img key={`img-1-index`} className="rounded-lg" src={add1} />
          )}
          {index === 1 && (
            <img key={`img-2-index`} className="rounded-lg" src={add2} />
          )}
          {index === 4 && (
            <img key={`img-3-index`} className="rounded-lg" src={add3} />
          )}
          <PostCard key={post.id} post={post} />
        </>
      ))}
    </div>
  );
};
