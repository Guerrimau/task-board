import { ReactNode, useReducer } from 'react';
import { EntriesContext, entriesReducer } from '.';


export interface EntriesState {
    entries: []
}

export interface ProviderProps {
    children: ReactNode
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: []
}

export const EntriesProvider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);


    return (
         <EntriesContext.Provider value={{ ...state }}>
             {children}
         </EntriesContext.Provider>
    )
}
