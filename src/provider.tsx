import * as React from 'react'
import { ReduxModularizedContext } from './context'

export const ReduxModularizedProvider = ({ modules }) => {
    return (
        <ReduxModularizedContext.Provider value={modules} />
    )
}
