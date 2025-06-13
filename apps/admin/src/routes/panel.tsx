import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

import { Footer, MainContent, Navbar } from '@/layout'

const Panel = () => {
    return (
        <>
            <Navbar />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </>
    )
}

export const Route = createFileRoute('/panel')({
    component: Panel,
    beforeLoad: ({ context }) => {
        if (!context.auth.isAuthenticated) {
            throw redirect({ to: "/" });
        }
    },
})
