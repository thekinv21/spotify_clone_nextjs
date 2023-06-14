import { FC } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { TbPlaylist } from 'react-icons/tb'
import { toast } from 'react-toastify'

import styles from '../CustomSidebar.module.scss'

interface ILibraryProps {
	children: React.ReactNode
}

const CustomLibrary: FC<ILibraryProps> = ({ children }) => {
	const handleClick = () => {
		// music search
		toast.success('Şarki Ekleyiniz!')
	}

	return (
		<section className={styles.library_container}>
			<section className={styles.library_content}>
				<div className={styles.library_content_block}>
					<div className={styles.library_content_block_items}>
						<TbPlaylist size={26} />

						<p>Kitapliğin</p>
					</div>

					<AiOutlinePlus
						onClick={handleClick}
						size={20}
						className={styles.icon}
					/>
				</div>
				<section className={styles.libraryMusicList}>
					Şarkilar Listeniz!
				</section>
			</section>
		</section>
	)
}

export default CustomLibrary
