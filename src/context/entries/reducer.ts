import { EntriesState } from ".";
import { Entry } from "@/interfaces";

type EntriesActionType =
  | { type: "Entries - Add"; payload: Entry }
  | { type: "Entries - Update Entry"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "Entries - Add":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    case "Entries - Update Entry":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) return action.payload;
          return entry;
        }),
      };
    default:
      return state;
  }
};
