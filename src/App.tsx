import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./Components/NavBar/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
