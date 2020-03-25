import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Huddle from "./pages/Huddle";
import Active from "./pages/Active";
import Snap from "./pages/Snap";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";

import './App.css';
//import Youtube from './Youtube';

function App() {
  return (
   
    <div className="App">
      <Router>
      <div>
        <Nav />
        <Switch>
          
          <Route exact path="/huddle" component={Huddle} />
          <Route exact path="/active" component={Active} />
          <Route exact path="/snap" component={Snap} />
          <Route exact path="/profile" component={Profile} />

        </Switch>
      </div>
      </Router>
    
     
     

    </div>
  );
}

export default App;
