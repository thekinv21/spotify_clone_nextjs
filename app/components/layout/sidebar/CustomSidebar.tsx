import styles from '@/scss/CustomSidebar.module.scss'
import { FC } from 'react'

import CustomLibrary from './library/CustomLibrary'
import CustomNavigation from './navigation/CustomNavigation'
import CustomNavigationItem from './navigation/CustomNavigationItem'
import { useCustomSidebar } from './useCustomSidebar'

interface ISiderbarProps {
	children: React.ReactNode
}

const CustomSidebar: FC<ISiderbarProps> = ({ children }) => {
	const { routes } = useCustomSidebar()
	return (
		<section className={styles.container}>
			<section className={styles.content}>
				<CustomNavigation>
					<div className={styles.navigation_content}>
						{routes.map((item, idx: number) => (
							<CustomNavigationItem key={idx} {...item} />
						))}
					</div>
				</CustomNavigation>
				<CustomLibrary>Song Library</CustomLibrary>
			</section>
		</section>
	)
}

export default CustomSidebar
