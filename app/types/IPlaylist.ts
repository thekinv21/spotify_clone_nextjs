export interface IPlaylist {
	collaborative: boolean
	description?: string
	external_urls: {
		spotify: string
	}
	href: string
	id: string
	images?: {
		url: string
		// Daha fazla ekleyebilirsin
	}[]
	name: string
	owner: {
		display_name: string
		external_urls: {
			spotify: string
		}
		href: string
		id: string
		type: string
		uri: string
	}
	primary_color: string | null
	public: boolean
	snapshot_id: string
	tracks?: {
		href: string
		total: number
	}
	type: string
	uri: string
}
