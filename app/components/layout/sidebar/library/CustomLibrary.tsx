import styles from '@/scss/CustomSidebar.module.scss'
import { FC } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { TbPlaylist } from 'react-icons/tb'
import { toast } from 'react-toastify'

import CreatePlaylistForm from './components/create-playlist-library/CreatePlaylistForm'
import CustomFollowItem from './components/custom-playlist-item/CustomFollowItem'
import CustomPlaylistItem from './components/custom-playlist-item/CustomPlaylistItem'
import CustomSkeletonItem from './components/custom-playlist-item/CustomSkeletonItem'
import { useCustomLibrary } from './useCustomLibrary'

interface ILibraryProps {
	children: React.ReactNode
}

const CustomLibrary: FC<ILibraryProps> = ({ children }) => {
	const handleClick = () => {
		// music search
		toast.success('Şarki Ekleyiniz!')
	}

	const { myPlaylist, followeds, open, handleOpen } = useCustomLibrary()

	return (
		<section className={styles.library_container}>
			<section className={styles.library_content}>
				<div className={styles.library_content_block}>
					<div className={styles.library_content_block_items}>
						<TbPlaylist size={26} />

						<p>Kitapliğin</p>
					</div>

					<AiOutlinePlus
						onClick={handleOpen}
						size={20}
						className={styles.icon}
					/>

					<CreatePlaylistForm open={open} handleOpen={handleOpen} />
				</div>
				<section className={styles.libraryMusicList}>
					{myPlaylist.length ? (
						myPlaylist.map((item, idx: number) => (
							<CustomPlaylistItem key={idx} {...item} />
						))
					) : (
						<CustomSkeletonItem />
					)}

					{followeds.length ? (
						followeds.map((item, idx: number) => (
							<CustomFollowItem key={idx} {...item} />
						))
					) : (
						<CustomSkeletonItem />
					)}
				</section>
			</section>
		</section>
	)
}

export default CustomLibrary
