import followedArtistSlice from '@/slices/followedArtistSlice'
import playlistSlice from '@/slices/playlistSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		playlists: playlistSlice,
		myfolloweds: followedArtistSlice
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
