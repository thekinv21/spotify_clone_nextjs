import { useState } from 'react'

import { apiCall } from '@/api/apiCall'

export const useCustomLibrary = () => {
	const { myPlaylist, followeds } = apiCall()

	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(cur => !cur)

	return {
		myPlaylist,
		followeds,
		handleOpen,
		open
	}
}
