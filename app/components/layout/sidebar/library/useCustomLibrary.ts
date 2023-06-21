import { setFolloweds, setPlaylist } from '@/slices/playlistSlice'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type { RootState } from '@/store/store'

import useSpotify from '@/hooks/useSpotify'

export const useCustomLibrary = () => {
	const playlist = useSelector((state: RootState) => state.playlists.playlist)
	const followeds = useSelector((state: RootState) => state.playlists.followeds)

	const { data: session } = useSession()

	const spotifyApi = useSpotify()

	const dispatch = useDispatch()

	useEffect(() => {
		const getMyPlaylist = async () => {
			const myPlaylist = await spotifyApi.getUserPlaylists()

			dispatch(setPlaylist(myPlaylist.body.items))
		}

		const getMyFolloweds = async () => {
			const myFolloweds = await spotifyApi.getFollowedArtists()

			dispatch(setFolloweds(myFolloweds.body.artists.items))
		}

		if (spotifyApi.getAccessToken()) {
			getMyPlaylist()
			getMyFolloweds()
		}
	}, [session])

	//? CREATE FORMU AÇIP KAPATMAK İÇİN KULLANACAĞIZ

	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(cur => !cur)

	return {
		playlist,
		followeds,
		handleOpen,
		open,
		dispatch
	}
}
