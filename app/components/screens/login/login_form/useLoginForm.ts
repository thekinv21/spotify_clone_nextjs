import { SubmitHandler, useForm } from 'react-hook-form'

interface IData {
	username: string
	password: string
}

export const useLoginForm = () => {
	const { register, handleSubmit, reset } = useForm<IData>()

	const handleLogin: SubmitHandler<IData> = data => {
		console.log(data)

		reset()
	}

	return {
		handleLogin,
		handleSubmit,
		register
	}
}
