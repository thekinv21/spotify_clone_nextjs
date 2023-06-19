import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { GrPlayFill } from 'react-icons/gr'

import styles from './CustomBanner.module.scss'

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
		<div onClick={handleRoute} className={styles.container}>
			<div className={styles.content}>
				<Image
					draggable={false}
					className='object-cover w-auto'
					src={image}
					fill={true}
					alt='liked playlists'
					priority
					sizes='(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%'
				/>
			</div>
			<p className={styles.title}>{name}</p>

			<div className={styles.play_icon}>
				<button className={styles.circle}>
					<GrPlayFill size={25} />
				</button>
			</div>
		</div>
	)
}

export default CustomBannerItem
