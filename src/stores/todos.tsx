import { ReactNode,createContext } from "react";
export type TodosProviderProps = {
    children:ReactNode
}
export const todosContext = createContext(null)

export const TodosProvider = ({children}:TodosProviderProps)=>{
    return <todosContext.Provider value={}>
        {children}
    </todosContext.Provider>
}