import React, { useState, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Huddle from "./pages/Huddle";
import Active from "./pages/Active";
import Snap from "./pages/Snap";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
//import { Grid } from "@material-ui/core";
//import { SearchBar, VideoList, VideoDetail } from "./components/YoutubeSearch";
//import youtube from "./utils/api/youtube";
import './App.css';

// function App 
export default class App extends Component {
  render() {
  
    return (
    
      <div className="App">
        <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
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
  
}

// export default App;
