import React from "react";
import { List, Paper } from "@mui/material";
import { EntryItem } from "..";

export const EntryList = () => {
  return (
    <Paper
      sx={{
        height: "calc(100%)",
        overflow: "auto",
        bgcolor: "transparent",
        p: 1,
      }}
    >
      {/* Todo: change opacity if drag is happening */}
      <List sx={{ opacity: 1 }}>
        <EntryItem />
        <EntryItem />
        <EntryItem />
        <EntryItem />
      </List>
    </Paper>
  );
};
