import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { showDrawer } from "../../store/appSlice";

import { Box, Drawer } from "@mui/material";
import NavLinks from "../NavLinks/NavLinks";

const DrawerContainer = () => {
  const dispatch: any = useAppDispatch();
  const isDrawerOpen: boolean = useAppSelector((state) => state.app.showDrawer);

  const clickHandler = (bool: boolean): void => {
    dispatch(showDrawer(bool));
  };

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => clickHandler(false)}
      variant="temporary"
    >
      <Box sx={{ width: 250, padding: "5rem 0" }}>
        <NavLinks
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        />
      </Box>
    </Drawer>
  );
};

export default DrawerContainer;
