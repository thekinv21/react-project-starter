import { Fragment } from 'react/jsx-runtime'

import { ReactQueryProvider } from './ReactQueryProvider'

interface IApplicationProviderProps {
	children: React.ReactNode
}

export default function ApplicationProvider({
	children
}: IApplicationProviderProps) {
	return (
		<Fragment>
			<ReactQueryProvider>{children}</ReactQueryProvider>
		</Fragment>
	)
}
