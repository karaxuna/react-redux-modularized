import * as React from 'react'
import { ReduxModularizedContext } from './context'

export const ReduxModularizedProvider = ({ modules, ...rest }) => {
    return (
        <ReduxModularizedContext.Provider {...rest} value={modules} />
    )
}
