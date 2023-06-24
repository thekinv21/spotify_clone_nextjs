import styles from '@/scss/Layout.module.scss'
import { IMeta } from '@/types/IMeta'
import { FC, PropsWithChildren } from 'react'

import Meta from '@/components/meta/Meta'

import CustomFooter from './footer/CustomFooter'
import CustomHeader from './header/CustomHeader'
import CustomSidebar from './sidebar/CustomSidebar'

const Layout: FC<PropsWithChildren<IMeta>> = ({
	children,
	title,
	description
}) => {
	return (
		<Meta title={title} description={description}>
			<section className={styles.container}>
				<main className={styles.content}>
					<CustomSidebar>{children}</CustomSidebar>

					<section className={styles.main}>
						<CustomHeader />
						<main className={styles.main_content}>{children}</main>
					</section>
				</main>
				<footer>
					<CustomFooter />
				</footer>
			</section>
		</Meta>
	)
}

export default Layout
