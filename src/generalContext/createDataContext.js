import React,{useReducer} from 'react'
import * as R from 'ramda'
const createDataContext = (reducer, actions, initVal) => {
    const Context = React.createContext()

    const Provider = ({children}) => {
        const [state,dispatch] = useReducer(reducer, initVal)
        const boundAction = R.map(key => key(dispatch),actions)
        return (
            <Context.Provider>
                {children}
            </Context.Provider>
        )
    }
    return {Context, Provider}
}
export default createDataContext