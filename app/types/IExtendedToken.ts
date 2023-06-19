import { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

export enum TokenError {
	RefreshAccessTokenError = 'RefreshAccessTokenError'
}

export interface IExtendedToken extends JWT {
	accessToken: string
	refreshToken: string
	accessTokenExpiresAt: number
	user: User
	error?: TokenError
}

export interface IExtendedSession extends Session {
	accessToken: IExtendedToken['accessToken']
	error: IExtendedToken['error']
}

declare module 'next-auth' {
	interface Session {
		accessToken?: string
		error?: TokenError
	}
}
