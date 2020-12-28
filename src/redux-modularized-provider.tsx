import * as React from 'react'
import { ReduxModularizedContext } from './redux-modularized-context'

export const ReduxModularizedProvider = ({ modules }) => {
    return (
        <ReduxModularizedContext.Provider value={modules} />
    )
}
