import styles from '@/scss/CustomSidebar.module.scss'
import { IFoollowedArtists } from '@/types/IFollowedArtists'
import { FC } from 'react'

const ArtistPlaylistItem: FC<IFoollowedArtists> = ({
	images,
	name,
	type,
	id
}) => {
	return (
		<section className={styles.library_item_container}>
			<div className={styles.library_item_image_block}>
				<img
					draggable={false}
					className='object-cover rounded-full w-12 h-12'
					src={images ? images[0].url : '/miyagi.jpeg'}
					alt='playlist image'
				/>
			</div>

			<div className={styles.library_item_content}>
				<p>{name}</p>
				<div>
					<p>{type.toUpperCase()}</p>
				</div>
			</div>
		</section>
	)
}

export default ArtistPlaylistItem
