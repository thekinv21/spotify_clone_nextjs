import styles from '@/scss/CustomSongCard.module.scss'
import { IPlaylist } from '@/types/IPlaylist'
import { FC } from 'react'
import { GrPlayFill } from 'react-icons/gr'

const CustomSongCard: FC<IPlaylist> = ({ name, images, type, tracks, id }) => {
	return (
		<section>
			<div className={styles.content}>
				<div className={styles.music_card}>
					<div className={styles.music_image_holder}>
						<img
							draggable={false}
							src={images?.length ? images[0].url : '/playlist_image.png'}
							alt='music mage'
							className={styles.image}
						/>
					</div>
					<div className={styles.music_text}>
						<h2>{name}</h2>
						<div>
							<p>{type.toUpperCase()}</p>
							<p>Müzik : {tracks ? tracks.total : 'Belirsiz'}</p>
						</div>
					</div>

					<div className={styles.play_icon}>
						<button className={styles.circle}>
							<GrPlayFill size={25} />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CustomSongCard
