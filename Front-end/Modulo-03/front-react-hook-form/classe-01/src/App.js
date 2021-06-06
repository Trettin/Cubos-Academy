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
import FindComment from "./pages/FindComment";
import DeleteComment from "./pages/DeleteComment";

import ContextProvider from "./context/responseStateProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
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
            <Route path="/get" component={FindComment} />
            <Route path="/delete" component={DeleteComment} />
          </Switch>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
