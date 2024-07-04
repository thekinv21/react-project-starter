import { Fragment } from 'react/jsx-runtime'

import { ReactQueryProvider } from './ReactQueryProvider'
import ApplicationRouter from '@/routes/routes'
import '@/style/index.scss'

export default function ApplicationProvider() {
	return (
		<Fragment>
			<ReactQueryProvider>
				<ApplicationRouter />
			</ReactQueryProvider>
		</Fragment>
	)
}
