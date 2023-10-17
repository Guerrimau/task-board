"use client";

import { useContext } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { UiContext } from "@/context/ui";

const menuItems: string[] = ["Send Email", "Exit"];

export const Siderbar = () => {
  const { sideMenuOpen, closeSideMenu } = useContext(UiContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={() => closeSideMenu()}>
      <Box sx={{ padding: "5px 10px", width: "250px" }}>
        <Typography variant="h4">Menu</Typography>
        <List>
          {menuItems.map((item) => (
            <ListItemButton key={item}>{item}</ListItemButton>
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
};
