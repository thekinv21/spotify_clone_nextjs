import Image from 'next/image'
import { FC } from 'react'
import { GrPlayFill } from 'react-icons/gr'

import styles from './CustomSongCard.module.scss'

interface ICustomSongCardProps {
	image: string
	singer: string
	description?: string
}

const CustomSongCard: FC<ICustomSongCardProps> = ({
	image,
	singer,
	description
}) => {
	const handleClick = () => {}

	return (
		<section>
			<div className={styles.content}>
				<div className={styles.music_card}>
					<div className={styles.music_image_holder}>
						<Image
							draggable={false}
							src={image}
							alt='music mage'
							width={200}
							height={80}
							className='object-contain rounded-lg'
							priority
							sizes='(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%'
						/>
					</div>
					<div className={styles.music_text}>
						<h2>{singer}</h2>
						<p>{description}</p>
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
