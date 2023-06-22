import styles from '@/scss/CustomSidebar.module.scss'
import React, { FC } from 'react'

interface INavigationProps {
	children: React.ReactNode
}

const CustomNavigation: FC<INavigationProps> = ({ children }) => {
	return <section className={styles.navigationContainer}>{children}</section>
}

export default CustomNavigation
