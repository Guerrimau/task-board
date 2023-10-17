"use client";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useContext } from "react";
import { UiContext } from "@/context/ui";

export const Navbar = () => {
  const { openSideMenu } = useContext(UiContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">Task Board</Typography>
      </Toolbar>
    </AppBar>
  );
};
