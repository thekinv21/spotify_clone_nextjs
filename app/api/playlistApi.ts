import { IPostPlaylistData } from '@/types/IRequestData'
import { useMutation } from '@tanstack/react-query'

import useSpotify from '@/hooks/useSpotify'

export const usePostPlaylist = () => {
	const spotifyApi = useSpotify()

	const postPlaylist = async ({
		requestData
	}: {
		requestData: IPostPlaylistData
	}) => {
		const response = await spotifyApi.createPlaylist(
			`${requestData.playlist_name}`,
			{
				description: `${requestData.playlist_desc}`,
				public: requestData.playlist_type,
				collaborative: requestData.playlist_collaborative
			}
		)

		return response
	}

	return useMutation(postPlaylist)
}
