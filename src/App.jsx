import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './homepage';
import { css } from 'styled-components';
import { Footer } from './components/footer';
import './App.css'

function App() {
  return (
    <div className="App">
       <BrowserRouter >
          <Switch > 
              <Route path="/" component={HomePage} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;