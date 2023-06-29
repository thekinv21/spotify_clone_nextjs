import {
	setByDans,
	setByFitness,
	setByFolloweds,
	setByMyPlaylist,
	setByPop,
	setByTop
} from '@/slices/playlistSlice'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store/store'

import useSpotify from '@/hooks/useSpotify'

export const apiCall = () => {
	const { data: session } = useSession()

	const spotifyApi = useSpotify()

	const dispatch = useDispatch()

	const topPlaylist = useSelector(
		(state: RootState) => state.playlists.topPlaylist
	)

	const popPlaylist = useSelector(
		(state: RootState) => state.playlists.popPlaylist
	)

	const followeds = useSelector((state: RootState) => state.playlists.followeds)

	const fitnessPlaylist = useSelector(
		(state: RootState) => state.playlists.fitnessPlaylist
	)

	const myPlaylist = useSelector(
		(state: RootState) => state.playlists.myPlaylist
	)

	const dansPlaylist = useSelector(
		(state: RootState) => state.playlists.dansPlaylist
	)

	useEffect(() => {
		//* TOP CHARTS PLAYLİSTLER

		const getByTop = async () => {
			const top = await spotifyApi.getPlaylistsForCategory('toplists', {
				limit: 6
			})

			dispatch(setByTop(top.body.playlists.items))
		}

		//* POP  PLAYLİSTLER

		const getByPop = async () => {
			const pop = await spotifyApi.getPlaylistsForCategory(
				'0JQ5DAqbMKFEC4WFtoNRpw',
				{
					limit: 6
				}
			)

			dispatch(setByPop(pop.body.playlists.items))
		}

		// * TAKİP EDİLENLER

		const getByMyFolloweds = async () => {
			const myFolloweds = await spotifyApi.getFollowedArtists({ limit: 6 })
			dispatch(setByFolloweds(myFolloweds.body.artists.items))
		}

		//* FITNESS İÇİN PLAYLİST

		const getByFitness = async () => {
			const fitness = await spotifyApi.getPlaylistsForCategory(
				'0JQ5DAqbMKFAXlCG6QvYQ4',
				{
					limit: 6
				}
			)
			dispatch(setByFitness(fitness.body.playlists.items))
		}

		//* USERIN PLAYLİSTİ

		const getByUser = async () => {
			const myPlaylist = await spotifyApi.getUserPlaylists({ limit: 6 })
			dispatch(setByMyPlaylist(myPlaylist.body.items))
		}

		//* DANS İÇİN PLAYLİST

		const getByDans = async () => {
			const dans = await spotifyApi.getPlaylistsForCategory(
				'0JQ5DAqbMKFHOzuVTgTizF',
				{
					limit: 6
				}
			)
			dispatch(setByDans(dans.body.playlists.items))
		}

		if (spotifyApi.getAccessToken()) {
			getByTop()
			getByPop()
			getByMyFolloweds()
			getByUser()
			getByFitness()
			getByDans()
		}
	}, [session])

	return {
		topPlaylist,
		popPlaylist,
		followeds,
		fitnessPlaylist,
		myPlaylist,
		dansPlaylist
	}
}
