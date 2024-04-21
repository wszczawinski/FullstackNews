import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Poster = { image: string; onClick?: () => void };

export const SidebarPoster = ({
  posters,
  delay = 3000,
}: {
  posters: Poster[];
  delay?: number;
}) => {
  return (
    <article className="w-full h-60">
      <Carousel
        plugins={[
          Autoplay({
            delay: delay,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {posters.map((poster) => (
            <CarouselItem key={poster.image} onClick={poster?.onClick}>
              <img className="rounded-lg" src={poster.image} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </article>
  );
};
