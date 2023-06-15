import { FC } from 'react'
import { SlUser } from 'react-icons/sl'

import CustomButton from '@/ui/CustomButton'

import styles from './CustomDrawer.module.scss'

const Sceletion = () => {
	return (
		<div className={styles.user_sceletion_container}>
			<div className={styles.user_icon}>
				<SlUser size={25} />
			</div>

			<div className={styles.sceletion}>
				<div className='mt-2 w-3/4'>
					<ul className='mt-5 flex w-full gap-2 flex-col items-start justify-center'>
						<li className='h-2 bg-black rounded-md'></li>
						<li className='h-2 bg-black rounded-md'></li>
						<li className='h-2 bg-black rounded-md'></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

const CustomDrawerContent: FC = () => {
	return (
		<div className={styles.content}>
			<p className={styles.content_description}>
				Spotify'daki arkadaşlarin ve takipçilerinin ne dinlediğini görmelerine
				izin ver.
			</p>

			<>
				<Sceletion />
				<Sceletion />
				<Sceletion />
			</>

			<div className='py-6'>
				<p className={styles.content_description}>
					Ayarlar &#62; Sosyal seçeneğine git ve `Arkadaşlarla dinleme modu aç`
					<br />
					Bunu istediğin zaman kapatabilirsin.
				</p>
			</div>

			<CustomButton className={styles.setting_button}>Ayarlar</CustomButton>
		</div>
	)
}

export default CustomDrawerContent
