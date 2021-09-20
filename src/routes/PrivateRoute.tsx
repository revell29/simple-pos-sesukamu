import { AuthContainer } from "components";
import * as React from "react";
import { Switch, withRouter, Route, Redirect } from "react-router-dom";
import allRoutes from ".";

const PrivateRoute = withRouter(() => {
  const AuthMenu = allRoutes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={true}
      render={(props) => <route.component {...props} />}
    />
  ));

  return (
    <AuthContainer>
      <Switch>
        {sessionStorage.getItem("token") ? AuthMenu : <Redirect to="/" />}
      </Switch>
    </AuthContainer>
  );
});

export default PrivateRoute;
