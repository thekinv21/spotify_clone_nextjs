import styles from '@/scss/CustomSidebar.module.scss'
import { IPlaylist } from '@/types/IPlaylist'
import { FC } from 'react'

const CollectionPlaylistItem: FC<IPlaylist> = ({
	tracks,
	name,
	description,
	images,
	id
}) => {
	return (
		<section className={styles.library_item_container}>
			<div className={styles.library_item_image_block}>
				<img
					draggable={false}
					className='object-cover h-12 w-12'
					src={images?.length ? images[0].url : '/playlist_image.png'}
					alt='playlist image'
				/>
			</div>

			<div className={styles.library_item_content}>
				<p>{name}</p>
				<div>
					<p>{description ? description : 'Çalma Listesi'}</p>
					<p>Tracks : {tracks?.total}</p>
				</div>
			</div>
		</section>
	)
}

export default CollectionPlaylistItem
