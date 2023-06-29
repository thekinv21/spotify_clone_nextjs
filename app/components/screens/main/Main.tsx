import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import CustomBanner from './components/spotify_banner/CustomBanner'
import CustomDiscover from './components/spotify_discover/CustomDiscover'

const Main: FC = () => {
	return (
		<Layout title='Spotify'>
			<CustomBanner />
			<CustomDiscover />
		</Layout>
	)
}

export default Main
