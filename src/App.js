import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Huddle from "./pages/Huddle";
//import Active from "./pages/Active";
//import Snap from "./pages/Snap";
//import Profile from "./pages/Profile";
import Nav from "./components/Nav";

import './App.css';
import Youtube from './Youtube';

function App() {
  return (
   
    <div className="App">
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/youtube" component={Youtube} />
          
        </Switch>
      </div>
    </Router>
    
     
     
     
    </div>
  );
}

export default App;
