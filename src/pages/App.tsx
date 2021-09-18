import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "routes/PrivateRoute";
import { Login } from ".";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute />
      </Switch>
    </Router>
  );
};

export default App;
