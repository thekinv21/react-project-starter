import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './index.scss'
import ApplicationProvider from './provider/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApplicationProvider>
			<App />
		</ApplicationProvider>
	</React.StrictMode>
)
