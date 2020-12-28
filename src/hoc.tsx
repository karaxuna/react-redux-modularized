import * as React from 'react'
import {
	useReduxModularized
} from './hook'

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
