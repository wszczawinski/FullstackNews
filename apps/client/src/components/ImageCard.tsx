import { formatBytes } from "@/utils";

export type ImageProps = {
  blob: string;
  name: string;
  size: number;
};

export const ImageCard = ({ image }: { image: ImageProps }) => {
  return (
    <div className="relative flex items-center space-x-4">
      <div className="flex flex-col flex-1 max-w-[100px]">
        <img
          src={image.blob}
          alt={image.name}
          width={100}
          height={50}
          loading="lazy"
          className="aspect-square shrink-0 rounded-sm object-cover"
        />
        <div className="flex flex-col">
          <p className="line-clamp-1 text-sm font-medium text-foreground/80">
            {image.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {formatBytes(image.size)}
          </p>
        </div>
      </div>
    </div>
  );
};
