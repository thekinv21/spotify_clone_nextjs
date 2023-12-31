import styles from '@/scss/CustomHeader.module.scss'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Drawer } from '@material-tailwind/react'
import Image from 'next/image'
import { FC, useState } from 'react'
import { LuUsers } from 'react-icons/lu'

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
						style={{
							width: '100%',
							height: 'auto'
						}}
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
