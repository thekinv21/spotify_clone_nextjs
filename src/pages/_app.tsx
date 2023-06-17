import '@/styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react'
import type { AppProps } from 'next/app'

import NotificationProvider from '@/provider/NotificationProvider'
import QueryProviders from '@/provider/QueryProviders'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryProviders>
			<ThemeProvider>
				<Component {...pageProps} />
				<NotificationProvider />
			</ThemeProvider>
		</QueryProviders>
	)
}
