import { IFoollowedArtists } from '@/types/IFollowedArtists'
import Image from 'next/image'
import { FC } from 'react'

import styles from '../../../CustomSidebar.module.scss'

const CustomFollowItem: FC<IFoollowedArtists> = ({ images, name, type }) => {
	return (
		<div className={styles.library_item_container}>
			<div className={styles.library_item_image_block}>
				<Image
					draggable={false}
					fill
					className='object-cover rounded-full'
					src={images ? images[0].url : '/miyagi.jpeg'}
					alt='playlist image'
					priority
					sizes='(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%'
				/>
			</div>

			<div className={styles.library_item_content}>
				<p>{name}</p>
				<div>
					<p>{type.toUpperCase()}</p>
				</div>
			</div>
		</div>
	)
}

export default CustomFollowItem
