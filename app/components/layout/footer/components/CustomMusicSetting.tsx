import styles from '@/scss/CustomFooter.module.scss'
import { FC } from 'react'
import {
	CiCircleList,
	CiDesktop,
	CiVolumeHigh,
	CiYoutube
} from 'react-icons/ci'
import { TbMicrophone2 } from 'react-icons/tb'

const CustomMusicSetting: FC = () => {
	return (
		<section className={styles.music_setting_container}>
			<CiYoutube size={20} className={styles.setting_icons} />
			<TbMicrophone2 size={20} className={styles.setting_icons} />
			<CiCircleList size={20} className={styles.setting_icons} />
			<CiDesktop size={20} className={styles.setting_icons} />
			<CiVolumeHigh size={20} className={styles.setting_icons} />
			<input type='range' min={0} max={100} className={styles.volume_range} />
		</section>
	)
}

export default CustomMusicSetting
