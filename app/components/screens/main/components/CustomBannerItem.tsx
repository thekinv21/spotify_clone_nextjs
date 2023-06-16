import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

import styles from '../Main.module.scss'

interface ICustomBannerItem {
	image: string
	name: string
	url: string
}

const CustomBannerItem: FC<ICustomBannerItem> = ({ image, name, url }) => {
	const router = useRouter()

	const handleRoute = () => {
		router.push(url)
	}
	return (
		<button onClick={handleRoute} className={styles.container}>
			<div className={styles.content}>
				<Image
					draggable={false}
					className='object-cover'
					src={image}
					fill
					alt='liked playlists'
				/>
			</div>
			<p className={styles.title}>{name}</p>
		</button>
	)
}

export default CustomBannerItem
