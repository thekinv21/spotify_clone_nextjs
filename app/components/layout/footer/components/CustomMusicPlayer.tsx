import styles from '@/scss/CustomFooter.module.scss'
import { FC } from 'react'
import {
	FaPlayCircle,
	FaRandom,
	FaStepBackward,
	FaStepForward
} from 'react-icons/fa'

const CustomMusicPlayer: FC = () => {
	return (
		<section className={styles.music_player_container}>
			<div className={styles.music_player_icons}>
				<FaRandom size={18} className={styles.play_random} />
				<FaStepBackward size={18} className={styles.play_back} />
				<FaPlayCircle size={40} className={styles.play_icon} />
				<FaStepForward size={18} className={styles.play_next} />
			</div>

			<div className={styles.music_progress_bar_container}>
				<span>0:49</span>

				<div className={styles.progress_bar}>
					<div className={styles.progress}></div>
				</div>

				<span>3:19</span>
			</div>
		</section>
	)
}

export default CustomMusicPlayer
