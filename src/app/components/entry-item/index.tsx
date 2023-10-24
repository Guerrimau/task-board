import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Entry } from "@/interfaces";

interface Props {
  entry: Entry
}

export const EntryItem = ({ entry }: Props) => {
  return (
    <Card sx={{ mb: 1 }} key={entry._id}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end", pr: 2 }}>
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};