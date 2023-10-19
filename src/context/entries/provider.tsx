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
  entries: [
    {
      _id: uuid(),
      description: "lorem",
      createdA: Date.now(),
      status: "Pending",
    },
    {
      _id: uuid(),
      description: "lorem ipsum",
      createdA: Date.now() - 1000000,
      status: "Pending",
    },
    {
      _id: uuid(),
      description: "lorem",
      createdA: Date.now() - 100000,
      status: "Pending",
    },
  ],
};

export const EntriesProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
