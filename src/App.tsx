import { useQuery } from '@tanstack/react-query'

export default function App() {
	const getTodos = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos')
		return response.json()
	}

	// Queries
	const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

	return (
		<div className='flex h-screen w-full items-center justify-center bg-gray-300'>
			<ul className='text-black'>
				{query.data?.map(({ name, id }: { name: string; id: number }) => (
					<li key={id}>{name}</li>
				))}
			</ul>
		</div>
	)
}
