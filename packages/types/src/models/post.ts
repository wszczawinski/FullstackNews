export type Post = {
    id: number;
    title: string;
    desc: string;
    cover: string;
    created: string;
};

export type PostsQueryParams = {
    page: number;
};

export type CreatePost = {
    post: {
        title: string;
        content: string;
        categoryId: string;
        status: string;
        tagIds: string[];
    }
}
