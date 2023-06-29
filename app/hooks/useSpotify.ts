import { IExtendedSession, TokenError } from '@/types/IExtendedToken'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'

import { spotifyApi } from '@/config/spotifyConfig'

const useSpotify = () => {
	const { data: session } = useSession()

	useEffect(() => {
		if (!session) return

		if (
			(session as IExtendedSession).error === TokenError.RefreshAccessTokenError
		) {
			signIn()
		}

		spotifyApi.setAccessToken((session as IExtendedSession).accessToken)
	}, [session])

	return spotifyApi
}

export default useSpotify
