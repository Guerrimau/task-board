"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "@/themes";
import { UiProvider } from "@/context/ui";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <UiProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </UiProvider>
  );
}
