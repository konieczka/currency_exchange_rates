import React from "react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "config/theme";
import MainView from "views/MainView";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <MainView />
    </ThemeProvider>
  );
}

export default App;
