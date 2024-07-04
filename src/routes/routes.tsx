import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Loader } from '@/components/ui/loader'

const HomePage = lazy(() => import('@/pages/home'))
const AboutPage = lazy(() => import('@/pages/about'))
const LoginPage = lazy(() => import('@/pages/auth/login'))

export default function ApplicationRouter() {
	const router = createBrowserRouter([
		{
			path: '*',
			element: <div>404 Not Found</div>
		},
		{
			path: '/',
			element: <HomePage />
		},
		{
			path: '/home',
			element: <HomePage />
		},
		{
			path: '/about',
			element: <AboutPage />
		},
		{
			element: <LoginPage />,
			children: [
				{
					path: '/login',
					element: <LoginPage />,
					index: true
				}
			]
		}
	])

	return (
		<Suspense fallback={<Loader />}>
			<RouterProvider router={router} />
		</Suspense>
	)
}
