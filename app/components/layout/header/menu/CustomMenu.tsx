import { menuLinks } from '@/constants/links'
import styles from '@/scss/CustomHeader.module.scss'
import { Menu, MenuHandler, MenuList } from '@material-tailwind/react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { SlUser } from 'react-icons/sl'

import CustomMenuLink from './CustomMenuLink'

const CustomMenu: FC = () => {
	const { data: session } = useSession()
	const router = useRouter()

	return (
		<>
			<Menu placement='bottom-start'>
				<MenuHandler>
					<button className={styles.header_user_icon_button}>
						<SlUser size={20} />
					</button>
				</MenuHandler>
				<MenuList className={styles.menuList}>
					{menuLinks.map((item, idx: number) => (
						<CustomMenuLink key={idx} {...item} />
					))}

					{session?.user ? (
						<button className={styles.header_button} onClick={() => signOut()}>
							{session.user.name}: Çikiş
						</button>
					) : (
						<button
							className={styles.header_button}
							onClick={() => router.push(`/login`)}
						>
							Oturum Aç
						</button>
					)}
				</MenuList>
			</Menu>
		</>
	)
}

export default CustomMenu
