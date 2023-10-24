"use client";

import React, { ChangeEvent, useContext, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import { EntriesContext } from "@/context/entries";
import { UiContext } from "@/context/ui";

export const NewEntry = () => {
  
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  
  const { isAddingEntry, setIsAddingEntry } = useContext(UiContext);
  const { addNewEntry } = useContext(EntriesContext);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onAddNewEntry = () => {
    setIsAddingEntry(!isAddingEntry);
  };

  const onCancel = () => {
    resetToDefaultValues();
  };

  const onSave = () => {
    if (inputValue.length === 0) return;

    addNewEntry(inputValue);
    resetToDefaultValues();
  };

  const resetToDefaultValues = () => {
    setIsTouched(false);
    setIsAddingEntry(false);
    setInputValue("");
  };

  return (
    <Stack spacing={1} sx={{ mb: 1 }}>
      {isAddingEntry ? (
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
