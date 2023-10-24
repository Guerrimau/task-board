"use client";

import React, { DragEvent, useContext, useMemo } from "react";
import { List, Paper } from "@mui/material";
import { EntryStatus } from "@/interfaces";
import { EntriesContext } from "@/context/entries";
import { EntryItem } from "../entry-item";
import { UiContext } from "@/context/ui";
import styles from "./styles.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList = ({ status }: Props) => {
  const { entries } = useContext(EntriesContext);
  const { isDragging } = useContext(UiContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries, status]
  );

  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("test");
    console.log(id);
  };

  return (
    <Paper
      sx={{
        height: "100%",
        overflow: "auto",
        bgcolor: "transparent",
        p: 1,
      }}
      component="div"
      className={ isDragging ? styles.dragging : "" }
      onDrop={onDropEntry}
      onDragOver={allowDrop}
    >
      {/* Todo: change opacity if drag is happening */}
      <List sx={{ opacity: isDragging ? 0.5 : 1, transition: "all .3s" }}>
        {entriesByStatus.map((entry) => (
          <EntryItem key={entry._id} entry={entry} />
        ))}
      </List>
    </Paper>
  );
};
