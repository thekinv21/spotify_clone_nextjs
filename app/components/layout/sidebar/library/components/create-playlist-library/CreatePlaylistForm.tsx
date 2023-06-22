import styles from '@/scss/CustomSidebar.module.scss'
import { Card, Dialog } from '@material-tailwind/react'
import { FC } from 'react'

import { useCreatePlaylistForm } from './useCreatePlaylistForm'

interface ICreateForm {
	open: boolean
	handleOpen: () => void
}

const CreatePlaylistForm: FC<ICreateForm> = ({ open, handleOpen }) => {
	const { register, handleSubmit, onSubmit } = useCreatePlaylistForm({
		handleOpen
	})

	return (
		<Dialog size='xs' open={open} handler={handleOpen} className={styles.modal}>
			<Card className={styles.modal_card}>
				<h3>Yeni PlayList oluştur</h3>

				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.form_item}>
						<label htmlFor='playlist_name'>Playlist Adi :</label>
						<input
							{...register('playlist_name', { required: true })}
							autoComplete='off'
							id='playlist_name'
						/>
					</div>

					<div className={styles.form_item}>
						<label htmlFor='playlist_desc'>Playlist Açiklama</label>
						<input
							id='playlist_desc'
							{...register('playlist_desc', { required: true })}
							autoComplete='off'
						/>
					</div>

					<div className={styles.form_item}>
						<label>Playlist Tipi</label>
						<select {...register('playlist_type', { required: true })}>
							<option value={'true'}>Herkese Açik</option>
							<option value={'false'}>Herkese Kapali</option>
						</select>
					</div>

					<div className={styles.form_item}>
						<label>Playlist Ortakliği</label>
						<select {...register('playlist_collaborative', { required: true })}>
							<option value={'true'}>Herkese Açik</option>
							<option value={'false'}>Herkese Kapali</option>
						</select>
					</div>

					<div className={styles.form_item}>
						<button type='submit'>Yeni Oluştur</button>
					</div>
				</form>
			</Card>
		</Dialog>
	)
}

export default CreatePlaylistForm
