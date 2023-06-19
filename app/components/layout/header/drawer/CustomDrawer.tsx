import { XMarkIcon } from '@heroicons/react/24/outline'
import { Drawer } from '@material-tailwind/react'
import Image from 'next/image'
import { FC, useState } from 'react'
import { LuUsers } from 'react-icons/lu'

import styles from '../CustomHeader.module.scss'
import CustomDrawerContent from './CustomDrawerContent'

const CustomDrawer: FC = () => {
	const [open, setOpen] = useState(false)
	const openDrawer = () => setOpen(true)
	const closeDrawer = () => setOpen(false)

	return (
		<>
			<button onClick={openDrawer} className={styles.user_icon_button}>
				<LuUsers size={20} />
			</button>

			<Drawer
				open={open}
				onClose={closeDrawer}
				className={styles.drawer}
				placement='right'
			>
				<div className={styles.drawer_content}>
					<Image
						src={`/logo.png`}
						alt='spotify'
						height={20}
						width={150}
						className='object-contain'
						draggable={false}
						priority
						sizes='(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%'
					/>

					<XMarkIcon
						onClick={closeDrawer}
						strokeWidth={2}
						className={styles.close_icon}
					/>
				</div>

				<CustomDrawerContent />
			</Drawer>
		</>
	)
}

export default CustomDrawer
