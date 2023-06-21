import '@/styles/globals.css'
import { ThemeProvider } from '@material-tailwind/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

import NotificationProvider from '@/provider/NotificationProvider'
import QueryProviders from '@/provider/QueryProviders'
import ReduxToolkitProvider from '@/provider/ReduxToolkitProvider'
import SkeletonProvider from '@/provider/SkeletonProvider'

export default function App({
	Component,
	pageProps: { session, ...pageProps }
}: AppProps) {
	return (
		<SessionProvider session={session}>
			<ReduxToolkitProvider>
				<QueryProviders>
					<ThemeProvider>
						<SkeletonProvider>
							<Component {...pageProps} />
						</SkeletonProvider>
						<NotificationProvider />
					</ThemeProvider>
				</QueryProviders>
			</ReduxToolkitProvider>
		</SessionProvider>
	)
}
