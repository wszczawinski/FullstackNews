import PostCard from "@/layout/PostCard";
import { useCreatePost } from "@/services/mutations";
import { usePostsQuery } from "@/services/queries";

const Home = () => {
  const { data: posts, isPending, isError } = usePostsQuery();
  const { mutate: createPost } = useCreatePost();

  const handleCreatePost = () => {
    createPost({
      cover: "fe pic 2",
      desc: "hello from fe 2",
      id: 5,
      title: "fe title",
    });
  };

  if (isPending || isError) {
    return <>Loading...</>;
  }

  return (
    <section className="flex flex-col gap-4">
      {posts?.map((post) => (
        <PostCard post={post} />
      ))}
      <button onClick={handleCreatePost}>add</button>
    </section>
  );
};

export default Home;
