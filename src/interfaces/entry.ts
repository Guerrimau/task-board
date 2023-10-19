
export type EntryStatus = 
    "Pending" | "In-Progress" | "Finished"

export interface Entry {
    _id: string;
    description: string;
    createdA: number;
    status: EntryStatus;
}