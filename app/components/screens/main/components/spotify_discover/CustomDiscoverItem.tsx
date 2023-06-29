import styles from '@/scss/CustomDiscover.module.scss'
import { IPlaylist } from '@/types/IPlaylist'
import Link from 'next/link'
import { FC } from 'react'

import CustomButton from '@/ui/spotify_custom_button/CustomButton'
import CustomSkeletonCard from '@/ui/spotify_song_card/CustomSkeletonCard'
import CustomSongCard from '@/ui/spotify_song_card/CustomSongCard'

interface ICustomItemProps {
	array: IPlaylist[]
	title: string
}

const CustomDiscoverItem: FC<ICustomItemProps> = ({ array, title }) => {
	return (
		<section className={styles.playlist_content}>
			<div className={styles.playlist_top_header}>
				<Link href={`/`} className={styles.playlist_link}>
					{title}
				</Link>

				<CustomButton className={styles.showAll}>Tümünü göster</CustomButton>
			</div>

			<div className={styles.playlist_items}>
				{array.length
					? array.map(item => <CustomSongCard key={item.id} {...item} />)
					: Array.from({ length: 6 }).map((_, index) => (
							<CustomSkeletonCard key={index} />
					  ))}
			</div>
		</section>
	)
}

export default CustomDiscoverItem
