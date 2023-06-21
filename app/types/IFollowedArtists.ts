export interface IFoollowedArtists {
	external_urls: {
		spotify: string
	}

	followers?: {
		href: null | string
		total: number
	}

	href: string
	id: string
	name: string
	popularity?: number
	type: string
	uri?: string

	images?: {
		url: string
		// Daha fazla ekleyebilirsin
	}[]

	genres: string[]
}
