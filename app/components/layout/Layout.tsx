import { IMeta } from '@/types/IMeta'
import { FC, PropsWithChildren } from 'react'

import Meta from '@/components/meta/Meta'

import CustomFooter from './footer/CustomFooter'
import CustomHeader from './header/CustomHeader'
import styles from './Layout.module.scss'
import CustomSidebar from './sidebar/CustomSidebar'

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description
}) => {
	return (
		<Meta title={title} description={description}>
			<section className={styles.container}>
				<CustomSidebar>{children}</CustomSidebar>

				<section className={styles.main}>
					<CustomHeader />

					<main className={styles.main_content}>{children}</main>
					<CustomFooter />
				</section>
			</section>
		</Meta>
	)
}

export default Layout
