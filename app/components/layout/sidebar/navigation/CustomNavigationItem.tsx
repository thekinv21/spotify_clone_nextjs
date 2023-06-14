import Link from 'next/link'
import { FC } from 'react'
import { IconType } from 'react-icons'

import styles from '../CustomSidebar.module.scss'

interface ICustomNavigationItem {
	icon: IconType
	label: string
	url: string
	active?: boolean
}

const CustomNavigationItem: FC<ICustomNavigationItem> = ({
	icon: Icon,
	label,
	url,
	active
}) => {
	return (
		<Link
			href={url}
			className={active ? styles.navigationLinkActive : styles.navigationLink}
		>
			<Icon size={26} />
			<p>{label}</p>
		</Link>
	)
}

export default CustomNavigationItem
