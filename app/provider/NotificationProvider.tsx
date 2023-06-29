import { FC } from 'react'
import { ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const NotificationProvider: FC = () => {
	return (
		<ToastContainer autoClose={2000} pauseOnHover={false} transition={Zoom} />
	)
}

export default NotificationProvider
