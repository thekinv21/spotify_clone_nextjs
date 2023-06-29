import styles from '@/scss/CustomFooter.module.scss'
import Image from 'next/image'
import { FC, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { toast } from 'react-toastify'

const CustomMusicInfo: FC = () => {
	const [fav, setFav] = useState(false)

	const toogleLike = () => {
		setFav(!fav)

		if (!fav) toast.success('Favorilere Eklendi..')
		else toast.success('Favoriden Çikarildi....')
	}

	return (
		<section className={styles.music_info_container}>
			<Image
				src={`/miyagi.jpeg`}
				alt='music image'
				width={50}
				height={50}
				className={styles.music_image}
				draggable={false}
			/>

			<div className={styles.music_detail}>
				<span>FUXK (feat. Ski Mask the Slum God)</span>
				<p>XXTENSION, Ski Mask the Slum God</p>
			</div>

			{fav ? (
				<BsHeartFill
					className={styles.play_icon_animate}
					size={16}
					onClick={toogleLike}
				/>
			) : (
				<BsHeart
					size={16}
					className={styles.music_fav_icon}
					onClick={toogleLike}
				/>
			)}
		</section>
	)
}

export default CustomMusicInfo
