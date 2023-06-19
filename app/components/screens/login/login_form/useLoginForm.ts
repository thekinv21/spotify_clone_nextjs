import { getProviders, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IData {
	username: string
	password: string
}

export const useLoginForm = () => {
	const { register, handleSubmit, reset } = useForm<IData>()

	//? SPOTİFY AUTH PROVİDERS

	const [provider, setProvider] =
		useState<Awaited<ReturnType<typeof getProviders>>>()

	useEffect(() => {
		const fetchProviders = async () => {
			const providers = await getProviders()

			setProvider(providers)
		}

		fetchProviders()
	}, [])

	const handleLogin: SubmitHandler<IData> = data => {
		signIn(provider?.spotify.id, { callbackUrl: '/' })
		reset()
	}

	return {
		handleLogin,
		handleSubmit,
		register
	}
}
