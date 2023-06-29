import styles from '@/scss/CustomFooter.module.scss'
import { FC } from 'react'

import CustomMusicInfo from './components/CustomMusicInfo'
import CustomMusicPlayer from './components/CustomMusicPlayer'
import CustomMusicSetting from './components/CustomMusicSetting'

const CustomFooter: FC = () => {
	return (
		<footer className={styles.footer}>
			<section className={styles.content}>
				<CustomMusicInfo />
				<CustomMusicPlayer />
				<CustomMusicSetting />
			</section>
		</footer>
	)
}

export default CustomFooter
