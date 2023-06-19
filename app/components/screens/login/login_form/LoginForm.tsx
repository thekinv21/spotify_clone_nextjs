import Link from 'next/link'
import { FC } from 'react'

import styles from '../Login.module.scss'
import { useLoginForm } from './useLoginForm'

const LoginForm: FC = () => {
	const { register, handleLogin, handleSubmit } = useLoginForm()

	return (
		<div className={styles.form}>
			<h1 className={styles.title}>Hesabiniza Giriniz!</h1>

			<form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
				<div className={styles.form_item}>
					<label htmlFor='username'>Kullanici Adi</label>
					<input
						autoComplete='off'
						id='username'
						type='text'
						placeholder='Spotify Web api  didn`t support Auth with username '
						disabled
						{...register('username')}
						className={styles.input}
					/>
				</div>

				<div className={styles.form_item}>
					<label htmlFor='password'>Şifre</label>
					<input
						autoComplete='off'
						id='password'
						placeholder='Spotify Web api  didn`t support Auth with password '
						disabled
						type='password'
						{...register('password')}
						className={styles.input}
					/>
				</div>

				<div className={styles.form_item}>
					<button onClick={() => console.log('hey')} type='submit'>
						Giriş Yap
					</button>
				</div>

				<div className={styles.form_item}>
					<p>Eğer Hesabiniz Yok ise...</p>
				</div>

				<Link className={styles.link} href={`/`}>
					Kayit Ol
				</Link>
			</form>
		</div>
	)
}

export default LoginForm
