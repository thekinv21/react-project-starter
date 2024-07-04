import React from 'react'
import ReactDOM from 'react-dom/client'

import ApplicationProvider from './provider/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApplicationProvider />
	</React.StrictMode>
)
