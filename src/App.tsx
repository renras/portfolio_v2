import React, { useEffect } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useAppDispatch } from "./store/hooks";
import { getProjects } from "./store/appSlice";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

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
