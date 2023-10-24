"use client"

import { DragEvent, useContext } from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Entry } from "@/interfaces";
import { UiContext } from "@/context/ui";

interface Props {
  entry: Entry;
}

export const EntryItem = ({ entry }: Props) => {

  const { setIsDragging } = useContext(UiContext);

  const onDragStart = (e: DragEvent) => {
    e.dataTransfer.setData("test", entry._id);
    setIsDragging(true);
    //Todo: change state to indicate that isDragging
  }

  const onDragEnd = () => {
    //todo: end drag
  }

  return (
    <Card sx={{ mb: 1 }} key={entry._id} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
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
