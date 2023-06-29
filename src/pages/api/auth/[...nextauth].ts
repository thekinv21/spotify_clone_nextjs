import { IExtendedToken, TokenError } from '@/types/IExtendedToken'
import NextAuth, { CallbacksOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

import { scopes, spotifyApi } from '@/config/spotifyConfig'

//?============ TOKEN REFRESH FUNCTION=============

const refreshAccessToken = async (
	token: IExtendedToken
): Promise<IExtendedToken> => {
	try {
		spotifyApi.setAccessToken(token.accessToken)
		spotifyApi.setRefreshToken(token.refreshToken)

		// Spotify benim tokenı güncelle lan

		const { body: refreshedTokens } = await spotifyApi.refreshAccessToken()

		// console.log('REFRESHED TOKENS', refreshedTokens)

		return {
			...token,
			accessToken: refreshedTokens.access_token,
			refreshToken: refreshedTokens.refresh_token || token.refreshToken,
			accessTokenExpiresAt: Date.now() + refreshedTokens.expires_in * 1000
		}
	} catch (error) {
		// console.log('Error', error)

		return {
			...token,
			error: TokenError.RefreshAccessTokenError
		}
	}
}

//?============ JWT CALLBACK FUNCTION=============

const jwtCallback: CallbacksOptions['jwt'] = async ({
	token,
	account,
	user
}) => {
	let extendedToken: IExtendedToken

	//? EĞER KULLANICI İLK KEZ GİRİŞ YAPIYOR İSE

	if (account && user) {
		extendedToken = {
			...token,
			user,
			accessToken: account.access_token as string,
			refreshToken: account.refresh_token as string,
			accessTokenExpiresAt: (account.expires_at as number) * 1000
		}

		// 		console.log('FİRST TİME LOGIN , EXTENDED TOKEN :', extendedToken)
		return extendedToken
	}

	//? Kimlik doğrulama oturumlarını kontrol etmek için sonraki istekler

	if (Date.now() + 5000 < (token as IExtendedToken).accessTokenExpiresAt) {
		// console.log('ACCESS TOKEN STİLL VALİD , RETURN EXTENDED TOKEN', token)

		return token
	}

	//? Mevcut tokenın süresi dolduğunda, yenileme fonksyonu
	// console.log('ACCESS TOKEN EXPIRED , REFRESHİNG')

	return await refreshAccessToken(token as IExtendedToken)
}

//?============ SESSİON CALLBACK FUNCTION=============

//? NOT : MEVCUT OLAN ACCESSTOKENA ERİŞMEK İÇİN

const sessionCallback: CallbacksOptions['session'] = async ({
	session,
	token
}) => {
	session.accessToken = (token as IExtendedToken).accessToken
	session.error = (token as IExtendedToken).error

	return session
}

export default NextAuth({
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID as string,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET_KEY as string,
			authorization: {
				url: `https://accounts.spotify.com/authorize`,

				params: {
					scope: scopes
				}
			}
		})
	],

	secret: `${process.env.SPOTIFY_JWT_SECRET}`,

	pages: {
		signIn: '/login',
		signOut: '/login'
	},

	callbacks: {
		jwt: jwtCallback,
		session: sessionCallback
	}
})
