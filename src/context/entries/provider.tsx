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
      description: "lorem pending",
      createdA: Date.now(),
      status: "Pending",
    },
    {
      _id: uuid(),
      description: "lorem ipsum pe",
      createdA: Date.now() - 1000000,
      status: "In-Progress",
    },
    {
      _id: uuid(),
      description: "lorem finished",
      createdA: Date.now() - 100000,
      status: "Finished",
    },
  ],
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

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry }}>
      {children}
    </EntriesContext.Provider>
  );
};
