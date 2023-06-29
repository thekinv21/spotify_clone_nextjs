import { IFoollowedArtists } from '@/types/IFollowedArtists'
import { IPlaylist } from '@/types/IPlaylist'
import { createSlice } from '@reduxjs/toolkit'

interface IPlaylistState {
	followeds: IFoollowedArtists[] | []
	topPlaylist: IPlaylist[] | []
	popPlaylist: IPlaylist[] | []
	myPlaylist: IPlaylist[] | []
	fitnessPlaylist: IPlaylist[] | []
	dansPlaylist: IPlaylist[] | []
	selectedPlaylist: IPlaylist | null
}

const initialState: IPlaylistState = {
	followeds: [],
	topPlaylist: [],
	popPlaylist: [],
	myPlaylist: [],
	fitnessPlaylist: [],
	dansPlaylist: [],
	selectedPlaylist: null
}

export const playlistSlice = createSlice({
	name: 'playlist',
	initialState,

	reducers: {
		setByFitness: (state, action) => {
			state.fitnessPlaylist = action.payload
		},

		setByMyPlaylist: (state, action) => {
			state.myPlaylist = action.payload
		},
		setByTop: (state, action) => {
			state.topPlaylist = action.payload
		},

		setByPop: (state, action) => {
			state.popPlaylist = action.payload
		},

		setByDans: (state, action) => {
			state.dansPlaylist = action.payload
		},

		setByFolloweds: (state, action) => {
			state.followeds = action.payload
		}
	}
})

export const {
	setByTop,
	setByPop,
	setByFolloweds,
	setByFitness,
	setByMyPlaylist,
	setByDans
} = playlistSlice.actions

export default playlistSlice.reducer
