import styles from '@/scss/CustomDiscover.module.scss'
import { FC } from 'react'

import { apiCall } from '@/api/apiCall'

import CustomDiscoverItem from './CustomDiscoverItem'

const CustomDiscover: FC = () => {
	const {
		topPlaylist,
		popPlaylist,
		fitnessPlaylist,
		myPlaylist,
		dansPlaylist
	} = apiCall()

	return (
		<section className={styles.playlist_container}>
			<CustomDiscoverItem
				array={topPlaylist}
				title='En Çok Dinlenen Listeler'
			/>

			<CustomDiscoverItem array={popPlaylist} title='Pop Müzik' />
			<CustomDiscoverItem array={fitnessPlaylist} title='Fitness İçin' />
			<CustomDiscoverItem array={myPlaylist} title='Playlistlerim' />
			<CustomDiscoverItem array={dansPlaylist} title='Dans ve Elektronik' />
		</section>
	)
}

export default CustomDiscover
