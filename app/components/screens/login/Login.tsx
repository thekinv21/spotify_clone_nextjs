import styles from '@/scss/Login.module.scss'
import Head from 'next/head'
import Image from 'next/image'
import { FC } from 'react'
import { toast } from 'react-toastify'

import CustomButton from '@/ui/spotify_custom_button/CustomButton'

import LoginForm from './login_form/LoginForm'

const Login: FC = () => {
	return (
		<>
			<Head>
				<title>Spotify Auth</title>
			</Head>
			<section className={styles.container}>
				<div className={styles.login_content}>
					<div className={styles.login_top}>
						<Image
							src={`/logo.png`}
							alt='spotify logo'
							width={250}
							height={50}
							draggable={false}
							priority
							sizes='(max-width: 768px) 100%, (max-width: 1200px) 100%, 100%'
						/>

						<CustomButton
							className={styles.withFacebook}
							onClick={() => toast.success('Bunu Bağlamadim )))')}
						>
							Facebook ile giriş yap!
						</CustomButton>

						<CustomButton
							className={styles.withGoogle}
							onClick={() => toast.success('Bunu Bağlamadim )))')}
						>
							Google ile giriş yap!
						</CustomButton>

						<div className={styles.with}>
							<div className={styles.minus}></div>

							<span>Yada</span>
							<div className={styles.minus}></div>
						</div>
					</div>

					<LoginForm />
				</div>
			</section>
		</>
	)
}

export default Login
