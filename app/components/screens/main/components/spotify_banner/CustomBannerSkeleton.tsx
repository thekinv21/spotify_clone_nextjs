import styles from '@/scss/CustomBanner.module.scss'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'

const CustomBannerSkeleton: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Skeleton width={100} height={60} />
			</div>
			<Skeleton width={150} height={20} />
		</div>
	)
}

export default CustomBannerSkeleton
