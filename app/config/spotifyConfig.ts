import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
	'user-read-email',
	'user-read-private',
	'user-library-read',
	'user-top-read',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-follow-read',
	'playlist-read-private',
	'playlist-read-collaborative',
	'playlist-modify-public',
	'playlist-modify-private',
	'streaming'
].join(',')

//? spotify api
const spotifyApi = new SpotifyWebApi({
	clientId: `${process.env.SPOTIFY_CLIENT_ID}`,
	clientSecret: `${process.env.SPOTIFY_CLIENT_SECRET_KEY}`
})

export { scopes, spotifyApi }
