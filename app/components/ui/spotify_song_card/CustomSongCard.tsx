import styles from '@/scss/CustomSongCard.module.scss'
import { IFoollowedArtists } from '@/types/IFollowedArtists'
import { FC } from 'react'
import { GrPlayFill } from 'react-icons/gr'

const CustomSongCard: FC<IFoollowedArtists> = ({
	name,
	images,
	type,
	popularity
}) => {
	const handleClick = () => {}

	return (
		<section>
			<div className={styles.content}>
				<div className={styles.music_card}>
					<div className={styles.music_image_holder}>
						<img
							draggable={false}
							src={images ? images[0].url : '/miyagi.jpeg'}
							alt='music mage'
							className={styles.image}
						/>
					</div>
					<div className={styles.music_text}>
						<h2>{name}</h2>
						<div>
							<p>{type.toUpperCase()}</p>
							<p>Popularity : {popularity}</p>
						</div>
					</div>

					<div className={styles.play_icon}>
						<button onClick={handleClick} className={styles.circle}>
							<GrPlayFill size={25} />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CustomSongCard
