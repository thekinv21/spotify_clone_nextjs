import { IPostPlaylistData } from '@/types/IRequestData'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { usePostPlaylist } from '@/api/playlistApi'

export const useCreatePlaylistForm = ({
	handleOpen
}: {
	handleOpen: () => void
}) => {
	const { register, handleSubmit, reset } = useForm<IPostPlaylistData>()

	const { mutate: CreatePlaylist } = usePostPlaylist()

	const onSubmit = async (requestData: IPostPlaylistData) => {
		new Promise(() => {
			CreatePlaylist(
				{ requestData },
				{
					onSuccess: () => {
						toast.success('Playlist oluşturuldu..')

						setTimeout(() => {
							window.location.reload()
						}, 3000)
					},
					onError: () => {
						toast.error('Beklenmedik Hata oluştu...')
					}
				}
			)
		})
		handleOpen()
		reset()
	}

	return {
		register,
		handleSubmit,
		onSubmit
	}
}
