import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from './CustomSongCard.module.scss'

const CustomSkeletonCard: FC = () => {
	return (
		<section>
			<div className={styles.content}>
				<div className={styles.music_card}>
					<div className={styles.music_image_holder}>
						<Skeleton className={styles.image} />
					</div>
					<div className={styles.music_text}>
						<Skeleton className='w-full' />
						<div className='flex justify-between items-center mt-4'>
							<Skeleton width={60} />
							<Skeleton width={60} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CustomSkeletonCard
