import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { showDrawer } from "../../store/appSlice";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "../NavLinks/NavLinks";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const isNavSticky = useAppSelector((state) => state.app.isNavSticky);

  const clickHandler = (bool: boolean): void => {
    dispatch(showDrawer(bool));
  };

  return (
    <AppBar position={isNavSticky ? "fixed" : "absolute"}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            RZV
          </Typography>
          <IconButton
            aria-label="menu"
            size="large"
            onClick={() => clickHandler(true)}
          >
            <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
          </IconButton>
          <NavLinks sx={{ display: { xs: "none", sm: "flex" }, gap: "1rem" }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
