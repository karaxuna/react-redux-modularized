import {
	useContext
} from 'react'
import {
	ReduxModularizedContext
} from './context'

export const useReduxModularized = () => {
	return useContext(ReduxModularizedContext)
}
