import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useToast
} from "@packages/ui";

import { postImages } from "@/services/api";
import { ImageCard, ImageProps } from "@/components/ImageCard";

const formSchema = z.object({
  images: z
    .instanceof(FileList)
    .refine((file) => file?.length >= 1, "At least one image is required."),
});

const ImagesForm = () => {
  const { toast } = useToast();
  const [multipleImages, setMultipleImages] = useState<ImageProps[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      images: undefined,
    },
    reValidateMode: "onBlur",
  });

  const { mutate: createImages } = useMutation({
    mutationFn: (images: FormData) => postImages(images),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Images uploaded",
      });
      form.reset();
      setMultipleImages([]);
    },
  });

  const changeImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageArray = Array.from(files).map((file) => {
        return {
          blob: URL.createObjectURL(file),
          name: file.name,
          size: file.size,
        };
      });
      setMultipleImages(imageArray);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const images = new FormData();

    for (const key of Object.keys(multipleImages)) {
      images.append("images", values.images[Number(key)]);
    }

    createImages(images);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="images"
          render={() => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  accept="image/*"
                  {...form.register("images")}
                  onChange={changeImages}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {!!multipleImages.length && (
          <div className="flex flex-row flex-wrap border rounded-sm p-2 gap-2">
            {multipleImages.map((image, index) => (
              <ImageCard image={image} key={index} />
            ))}
          </div>
        )}

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const Route = createLazyFileRoute("/media")({
  component: ImagesForm,
});
