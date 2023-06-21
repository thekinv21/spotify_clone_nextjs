import { FC } from 'react'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ISkeleton {
	children: React.ReactNode
}

const SkeletonProvider: FC<ISkeleton> = ({ children }) => {
	return <SkeletonTheme baseColor='#121313'>{children}</SkeletonTheme>
}

export default SkeletonProvider
