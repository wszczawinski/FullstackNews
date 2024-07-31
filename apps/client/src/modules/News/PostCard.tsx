import { Calendar } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@packages/ui";

import { Post } from "@/services/api";

import news_img_1 from "@/images/news_img_1.png";
import news_img_2 from "@/images/news_img_2.png";
import news_img_3 from "@/images/news_img_3.png";
import news_img_4 from "@/images/news_img_4.png";
import news_img_5 from "@/images/news_img_5.png";
import news_img_6 from "@/images/news_img_6.png";

export const PostCard = ({ post }: { post: Post }) => {
  const newsImages = [
    news_img_1,
    news_img_2,
    news_img_3,
    news_img_4,
    news_img_5,
    news_img_6,
  ];
  const randomImg = newsImages[Math.floor(Math.random() * newsImages.length)];

  const currentDate = new Date(post.created).toLocaleDateString("pl-PL", {
    year: "numeric",
    day: "numeric",
    month: "long",
  });

  return (
    <Card key={post.id} className="md:h-[160px]">
      <div className="flex flex-col md:flex-row ">
        <img
          className="h-[140px] md:h-[158px] md:w-[220px] object-cover rounded-t-lg md:rounded-l-lg md:rounded-r-none"
          src={randomImg}
        />
        <CardContent className="flex-1 pt-1 pb-2 px-3 flex flex-col justify-between gap-1 md:gap-2">
          <CardHeader className="p-0">
            <CardTitle className="font-normal text-lg text-sky-600">
              {post.title}
            </CardTitle>
            <CardDescription className="m-0 md:pt-1 line-clamp-4">
              {post.desc} Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Expedita nulla magni quae dolorem officia excepturi esse
              voluptatum quisquam facilis dolore deserunt soluta, praesentium
              fuga animi? Sunt enim quidem labore repudiandae exercitationem
              nisi atque necessitatibus laudantium asperiores molestias dicta,
              magni earum!
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between p-0 text-xs">
            <p className="flex gap-1">
              <Calendar size={14} /> {currentDate}
            </p>
            <Button size={"sm"} onClick={() => console.log("view post")}>
              więcej
            </Button>
          </CardFooter>
        </CardContent>
      </div>
    </Card>
  );
};
