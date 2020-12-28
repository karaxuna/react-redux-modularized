import {
	useContext
} from 'react'
import {
	ReduxModularizedContext
} from './redux-modularized-context'

export const useReduxModularized = () => {
	return useContext(ReduxModularizedContext)
}
