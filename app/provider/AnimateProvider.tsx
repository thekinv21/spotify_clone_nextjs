import { easeInOut, motion } from 'framer-motion'
import { FC } from 'react'

interface IAnimate {
	children: React.ReactNode
}

const AnimateProvider: FC<IAnimate> = ({ children }) => {
	return (
		<motion.section
			variants={{
				hidden: { opacity: 0, x: 50 },
				visible: { opacity: 1, x: 0 }
			}}
			initial='hidden'
			animate='visible'
			transition={{ duration: 0.6, delay: 0.3, ease: easeInOut }}
		>
			{children}
		</motion.section>
	)
}

export default AnimateProvider
