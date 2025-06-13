import { LoginForm } from '@/components/LoginForm'
import { createFileRoute } from '@tanstack/react-router'

const RouteComponent = () => {
    console.log('login')
    return (
        <div className='w-full h-[100vh] py-10 px-10 flex flex-col items-center justify-center'>
            <LoginForm />
        </div>
    )
}

export const Route = createFileRoute('/')({
    component: RouteComponent,
})
