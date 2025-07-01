import {z} from "zod";
import {useState} from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {
    Button,
    Input,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Select,
    SelectTrigger,
    SelectContent,
    SelectValue,
    SelectItem
} from "@packages/ui";

import {RichTextArea} from "@/components/RichTextArea.tsx";
import {useCreatePost} from "@/services/mutations.ts";

const formSchema = z.object({
    title: z.string()
        .min(10, {message: "Title must be at min 3 characters."})
        .max(100, {message: "Title must be at max 100 characters."})
        .nonempty("Title is required"),
    category: z.string({message: "Category is required."}).nonempty("Category is required"),
    status: z.enum(["DRAFT", "PUBLISHED"], {message: "Status must be one of the following: DRAFT, PUBLISHED"}),
});

export const PostForm = () => {
    const [content, setContent] = useState("");
    const {mutate, isPending} = useCreatePost();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            category: "",
            status: "DRAFT",
        },
        reValidateMode: "onBlur",
        mode: "onBlur",
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
        console.log(content)

        mutate({post: {...values, categoryId: values.category, content, tagIds: ['837a3ac5-2b2d-4673-857e-130c8c697834']}})
    }

    return <>
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="pb-8 flex-col space-y-8">
                <div className="w-full flex justify-between items-center">
                    <h1>Create Post</h1>
                    <Button type="submit" isLoading={isPending}>Submit</Button>
                </div>
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Status</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl className="w-full">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select status"/>
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="DRAFT">Draft</SelectItem>
                                    <SelectItem value="PUBLISHED">Published</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </form>
        </Form>
        <RichTextArea
            content={content}
            setContent={setContent}
        />
    </>
}
