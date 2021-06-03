import "./App.css";
import React from "react";

import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import NewComment from "./pages/NewComment";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="menu">
          <NavLink to="/" exact className="navlink">
            Home
          </NavLink>
          <NavLink to="/post" className="navlink">
            New Comment
          </NavLink>
          <NavLink to="/get" className="navlink">
            Find Comment
          </NavLink>
          <NavLink to="/put" className="navlink">
            Update Comment
          </NavLink>
          <NavLink to="/delete" className="navlink">
            Delete Comment
          </NavLink>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/post" component={NewComment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
