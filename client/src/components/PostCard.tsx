import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Post } from "@/services/api";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <>
      <Card key={post.id}>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className="justify-center">
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
};
