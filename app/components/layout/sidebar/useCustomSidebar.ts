import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'

export const useCustomSidebar = () => {
	const pathname = usePathname()

	const routes = useMemo(
		() => [
			{
				icon: HiHome,
				label: 'Ana Sayfa',
				active: pathname !== '/search', //? Aktive link halinde olması için active: pathname !== '/search',
				url: '/'
			},

			{
				icon: BiSearch,
				label: 'Ara',
				active: pathname === '/search',
				url: '/search'
			}
		],
		[pathname]
	)

	return {
		routes
	}
}
