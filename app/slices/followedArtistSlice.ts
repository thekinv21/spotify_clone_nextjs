import { IFoollowedArtists } from '@/types/IFollowedArtists'
import { createSlice } from '@reduxjs/toolkit'

interface IFollowedsState {
	followeds: IFoollowedArtists[] | []
}

const initialState: IFollowedsState = {
	followeds: []
}

export const followedArtistSlice = createSlice({
	name: 'followeds',
	initialState,
	reducers: {
		setFolloweds: (state, action) => {
			state.followeds = action.payload
		}
	}
})

export const { setFolloweds } = followedArtistSlice.actions

export default followedArtistSlice.reducer
