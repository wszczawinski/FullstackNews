import { PostCard } from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { useCreatePost } from "@/services/mutations";
import { usePostsQuery } from "@/services/queries";

import add1 from "@/images/posts_add_1.png";
import add2 from "@/images/posts_add_2.png";
import add3 from "@/images/posts_add_3.png";

const Home = () => {
  const { data: posts, isPending, isError } = usePostsQuery();
  const { mutate: createPost } = useCreatePost();

  const handleCreatePost = () => {
    createPost({
      cover: "cover4",
      desc: "description 4",
      title: "title 4",
    });
  };

  if (isPending || isError) {
    return <>Loading...</>;
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center"></div>
      {posts?.map((post, index) => (
        <>
          {index === 0 && <img className="rounded-lg" src={add1} />}{" "}
          {index === 1 && <img className="rounded-lg" src={add2} />}{" "}
          {index === 4 && <img className="rounded-lg" src={add3} />}
          <PostCard post={post} />
        </>
      ))}
      <Button onClick={handleCreatePost}>Add post</Button>
    </section>
  );
};

export default Home;
