import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "./homepage";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
