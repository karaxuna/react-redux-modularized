import { get, set } from 'object-path-immutable'

export const getLocalState = <TLocalState, TGlobalState>(globalState: TGlobalState, path: string[]) => {
    return get(globalState, path) as any as TLocalState
}

export const updateGlobalState = <TLocalState, TGlobalState>(globalState: TGlobalState, localState: TLocalState, path: string[]) => {
    return set(globalState, path, localState)
}
