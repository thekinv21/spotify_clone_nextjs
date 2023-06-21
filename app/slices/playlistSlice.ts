import { IFoollowedArtists } from '@/types/IFollowedArtists'
import { IPlaylist } from '@/types/IPlaylist'
import { createSlice } from '@reduxjs/toolkit'

interface IPlaylistState {
	playlist: IPlaylist[] | []
	followeds: IFoollowedArtists[] | []
	selectedPlaylistId: string | null
	selectedPlaylist: any | null
}

const initialState: IPlaylistState = {
	playlist: [],
	followeds: [],
	selectedPlaylistId: null,
	selectedPlaylist: null
}

export const playlistSlice = createSlice({
	name: 'playlist',
	initialState,

	reducers: {
		setPlaylist: (state, action) => {
			state.playlist = action.payload
		},
		setFolloweds: (state, action) => {
			state.followeds = action.payload
		}
	}
})

export const { setPlaylist, setFolloweds } = playlistSlice.actions

export default playlistSlice.reducer
