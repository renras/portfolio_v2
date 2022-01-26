import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Button,
  Typography,
} from "@mui/material";

const NavBar = () => {
  const buttons: string[] = ["Home", "About", "Projects", "Contact"];

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            RZV
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            {buttons.map((button, index) => {
              return <Button key={index}>{button}</Button>;
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
