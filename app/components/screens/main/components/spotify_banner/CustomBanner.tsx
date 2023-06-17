import { FC } from 'react'

import styles from './CustomBanner.module.scss'
import CustomBannerItem from './CustomBannerItem'

const CustomBanner: FC = () => {
	return (
		<div className={styles.mainBanner}>
			<h1>Spotify'a Hoşgeldiniz..</h1>

			<div className={styles.mainBanner_grid_container}>
				<CustomBannerItem
					image={`/liked.png`}
					url='/'
					name='Beğenilen Şarkilar..'
				/>

				<CustomBannerItem
					image={`/miyagi.jpeg`}
					url='/'
					name='MiyaGi / Endspiel'
				/>

				<CustomBannerItem image={`/scrip.jpg`} url='/' name='Scriptonit' />
				<CustomBannerItem image={`/wee.png`} url='/' name='The Weekend..' />
			</div>
		</div>
	)
}

export default CustomBanner
