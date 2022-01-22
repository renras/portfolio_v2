import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <NavBar />
        <Home />
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
