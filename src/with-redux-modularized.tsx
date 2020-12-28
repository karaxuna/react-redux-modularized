import * as React from 'react'
import {
	useReduxModularized
} from './use-redux-modularized'

export const withReduxModularized = () => {
	return (Component) => {
		return (props) => {
			const modules = useReduxModularized()

			return (
				<Component modules={modules} {...props} />
			)
		}
	}
}
