import React from "react";
import { AppBar } from "@mui/material";
import { Container } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";

const App = () => {
  return (
    <AppBar color="secondary">
      <Container>
        <Toolbar disableGutters>
          <h1>RZV</h1>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
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

export default App;
