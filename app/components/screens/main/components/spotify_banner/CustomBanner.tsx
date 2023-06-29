import styles from '@/scss/CustomBanner.module.scss'
import { useSession } from 'next-auth/react'
import { FC } from 'react'

import CustomBannerItem from './CustomBannerItem'
import CustomBannerSkeleton from './CustomBannerSkeleton'

const CustomBanner: FC = () => {
	const { data: session } = useSession()

	return (
		<div className={styles.mainBanner}>
			{session ? (
				<h1>{session.user?.name} &#128293;</h1>
			) : (
				<h1>Spotify'a Hoşgeldiniz..</h1>
			)}

			{session ? (
				<div className={styles.mainBanner_grid_container}>
					<CustomBannerItem
						image={`/liked.png`}
						url='/'
						name='Beğenen Şarkilarim'
					/>

					<CustomBannerItem image={`/saved.png`} url='/' name='Bölümlerim' />
				</div>
			) : (
				<div className={styles.mainBanner_grid_container}>
					<CustomBannerSkeleton />

					<CustomBannerSkeleton />
				</div>
			)}
		</div>
	)
}

export default CustomBanner
