import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'

import CustomButton from '@/ui/CustomButton'

import styles from './CustomHeader.module.scss'
import CustomDrawer from './drawer/CustomDrawer'
import CustomMenu from './menu/CustomMenu'

interface ICustomHeaderProps {
	children: React.ReactNode
	className?: string
}

const CustomHeader: FC<ICustomHeaderProps> = ({ children, className }) => {
	const router = useRouter()

	const handleLogout = () => {
		//handle logout
	}

	return (
		<header className={styles.header}>
			<section className={styles.header_content}>
				<div className={styles.header_item}>
					<button
						onClick={() => router.back()}
						className={styles.header_icon_button}
					>
						<RxCaretLeft size={35} />
					</button>

					<button
						onClick={() => router.forward()}
						className={styles.header_icon_button}
					>
						<RxCaretRight size={35} />
					</button>
				</div>

				<div className={styles.header_mobile_icon}>
					<button className={styles.home_icon_button}>
						<HiHome size={25} />
					</button>
					<button className={styles.home_icon_button}>
						<BiSearch size={25} />
					</button>
				</div>

				<div className={styles.defaultFlex}>
					<>
						<CustomButton className={styles.premium_button}>
							Premiuma Yükselt
						</CustomButton>

						<div>
							<CustomDrawer />
							<CustomMenu />
						</div>
					</>
				</div>
			</section>
		</header>
	)
}

export default CustomHeader
