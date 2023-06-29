import { FC } from 'react'
import { Provider } from 'react-redux'

import { store } from '@/store/store'

interface IReduxToolkitProps {
	children: React.ReactNode
}
const ReduxToolkitProvider: FC<IReduxToolkitProps> = ({ children }) => {
	return <Provider store={store}>{children}</Provider>
}

export default ReduxToolkitProvider
