import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { HomePage } from "./homepage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
