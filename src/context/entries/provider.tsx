import { ReactNode, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { EntriesContext, entriesReducer } from ".";
import { Entry } from "@/interfaces";

export interface EntriesState {
  entries: Entry[];
}

export interface ProviderProps {
  children: ReactNode;
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuid(),
      createdA: Date.now(),
      status: "Pending",
      description,
    };

    dispatch({ type: "Entries - Add", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "Entries - Update Entry", payload: entry })
  };

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
