"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "@/themes";
import { UiProvider } from "@/context/ui";
import { EntriesProvider } from "@/context/entries";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <UiProvider>
      <EntriesProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </EntriesProvider>
    </UiProvider>
  );
}
