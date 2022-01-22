import React from "react";
import { AppBar } from "@mui/material";
import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            RZV
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Works</Button>
            <Button>Contact</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
