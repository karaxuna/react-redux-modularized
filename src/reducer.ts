export const createReactModularizedReducer = (modules) => {
    return (innerReducer) => {
        return (state, action) => {
            return Object
                .keys(modules)
                .map((name) => modules[name].reducer)
                .concat(innerReducer)
                .reduce((previousState, reducer) => {
                    return reducer(previousState, action)
                }, state)
        }
    }
}