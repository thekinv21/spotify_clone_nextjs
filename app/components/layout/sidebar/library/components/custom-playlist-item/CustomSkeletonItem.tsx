import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

import styles from '../../../CustomSidebar.module.scss'

const CustomSkeletonItem: FC = () => {
	return (
		<div className={styles.library_item_container}>
			<div className={styles.library_item_image_block}>
				<Skeleton circle={true} width={50} height={50} />
			</div>

			<div className={styles.library_item_content}>
				<Skeleton width={120} />
				<div className='flex justify-between items-center'>
					<Skeleton width={50} />
					<Skeleton width={50} />
				</div>
			</div>
		</div>
	)
}

export default CustomSkeletonItem
