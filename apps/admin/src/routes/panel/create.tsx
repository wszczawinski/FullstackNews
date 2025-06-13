import { createFileRoute } from '@tanstack/react-router'

import { PostForm } from '@/components/PostForm'

const RouteComponent = () => {
    return <PostForm />
}

export const Route = createFileRoute('/panel/create')({
    component: RouteComponent,
})
