import { IPlaylist } from '@/types/IPlaylist'
import Image from 'next/image'
import { FC } from 'react'

import styles from '../../../CustomSidebar.module.scss'

const CustomPlaylistItem: FC<IPlaylist> = ({
	tracks,
	name,
	description,
	images
}) => {
	return (
		<div className={styles.library_item_container}>
			<div className={styles.library_item_image_block}>
				<Image
					draggable={false}
					fill
					className='object-cover'
					src={images?.length ? images[0].url : '/playlist_image.png'}
					alt='playlist image'
					priority
					sizes='(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%'
				/>
			</div>

			<div className={styles.library_item_content}>
				<p>{name}</p>
				<div>
					<p>{description ? description : 'Çalma Listesi'}</p>
					<p>Tracks : {tracks?.total}</p>
				</div>
			</div>
		</div>
	)
}

export default CustomPlaylistItem
