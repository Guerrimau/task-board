"use client";

import React, { ChangeEvent, useContext, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import { EntriesContext } from "@/context/entries";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const { addNewEntry } = useContext(EntriesContext);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onAddNewEntry = () => {
    setIsAdding(!isAdding);
  };

  const onCancel = () => {
    setIsAdding(!isAdding);
  };

  const onSave = () => {
    addNewEntry(inputValue);
    setIsTouched(false);
    setIsAdding(false);
    setInputValue("");
  };

  return (
    <Stack spacing={1} sx={{ mb: 1 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            autoFocus
            multiline
            placeholder="New entry"
            error={inputValue.length <= 0}
            value={inputValue}
            onChange={onChange}
          />
          <Stack direction="row" gap={1}>
            <Button variant="outlined" color="secondary" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              startIcon={<SaveIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Stack>
        </>
      ) : (
        <Button
          variant="outlined"
          fullWidth
          startIcon={<AddIcon />}
          onClick={onAddNewEntry}
        >
          Add new entry
        </Button>
      )}
    </Stack>
  );
};
