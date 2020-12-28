export const createReactModularizedReducer = (modules) => {
    return (innerReducer) => {
        return (state, action) => {
            const reducers = Object
                .keys(modules)
                .map((name) => modules[name].reducer)

            reducers.unshift(innerReducer)

            return reducers.reduce((previousState, reducer) => {
                return reducer(previousState, action)
            }, state)
        }
    }
}