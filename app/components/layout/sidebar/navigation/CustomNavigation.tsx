import React, { FC } from 'react'

import styles from '../CustomSidebar.module.scss'

interface INavigationProps {
	children: React.ReactNode
}

const CustomNavigation: FC<INavigationProps> = ({ children }) => {
	return <section className={styles.navigationContainer}>{children}</section>
}

export default CustomNavigation
