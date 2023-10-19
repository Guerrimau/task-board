import { EntriesState } from '.';

type EntriesActionType =
| { type: 'Entries - Add' }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
    switch (action.type) {
        case 'Entries - Add':
            return {...state}
        default:
            return state;
    }
}