import { Button } from "@/components/ui/button";
import PostCard from "@/layout/PostCard";
import { useCreatePost } from "@/services/mutations";
import { usePostsQuery } from "@/services/queries";

const Home = () => {
  const { data: posts, isPending, isError } = usePostsQuery();
  const { mutate: createPost } = useCreatePost();

  const handleCreatePost = () => {
    createPost({
      cover: "FE cover",
      desc: "FE desc",
      title: "fE title",
    });
  };

  if (isPending || isError) {
    return <>Loading...</>;
  }

  return (
    <section className="flex-1 flex flex-col gap-4">
      <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
        
      </div>
      {posts?.map((post) => (
        <PostCard post={post} />
      ))}
      <Button onClick={handleCreatePost}>Add post</Button>
    </section>
  );
};

export default Home;
