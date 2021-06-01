import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";

import useAuth from "./hooks/useAuth";
import AuthProvider from "./context/AuthProvider";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function ProtectedRoutes(props) {
  const auth = useAuth();

  return (
    <Route
      render={() => (auth.token ? props.children : <Redirect to="/login" />)}
    />
  );
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <div className="main">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" exact component={Home} />
              <ProtectedRoutes>
                <Route path="/profile/:user" component={Profile} />
              </ProtectedRoutes>
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
