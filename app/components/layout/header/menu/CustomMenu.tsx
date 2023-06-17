import { menuLinks } from '@/constants/links'
import { Menu, MenuHandler, MenuList } from '@material-tailwind/react'
import { FC } from 'react'
import { SlUser } from 'react-icons/sl'

import styles from '../CustomHeader.module.scss'
import CustomMenuLink from './CustomMenuLink'

const CustomMenu: FC = () => {
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
				</MenuList>
			</Menu>
		</>
	)
}

export default CustomMenu
