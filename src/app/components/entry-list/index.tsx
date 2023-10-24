"use client";

import React, { useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntryStatus } from "@/interfaces";
import { EntriesContext } from "@/context/entries";
import { EntryItem } from "../entry-item";

interface Props {
  status: EntryStatus
}

export const EntryList = ({ status }: Props) => {
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries, status]);

  return (
    <Paper
      sx={{
        height: "100%",
        overflow: "auto",
        bgcolor: "transparent",
        p: 1,
      }}
    >
      {/* Todo: change opacity if drag is happening */}
      <List sx={{ opacity: 1 }}>
        {entriesByStatus.map(entry => <EntryItem key={entry._id} entry={entry} />)}
      </List>
    </Paper>
  );
};