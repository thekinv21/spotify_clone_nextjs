import { MenuItem } from '@material-tailwind/react'
import Link from 'next/link'
import { FC, forwardRef } from 'react'
import { IconType } from 'react-icons'

interface ICustomMenuItem {
	icon: IconType
	label: string
	url: string
}
const CustomMenuLink: FC<ICustomMenuItem> = forwardRef<
	HTMLButtonElement,
	ICustomMenuItem
>(({ icon: Icon, label, url }, ref) => {
	return (
		<MenuItem className='flex flex-row items-start gap-3 mt-5' ref={ref}>
			<Icon size={20} />
			<Link className='text-xs ml-3' href={url}>
				{label}
			</Link>
		</MenuItem>
	)
})

export default CustomMenuLink
