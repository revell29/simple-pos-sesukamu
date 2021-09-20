import { AuthContainer } from "components";
import * as React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
// import { supabase } from "service/supabase/connection";
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
      <Switch>{AuthMenu}</Switch>
    </AuthContainer>
  );
});

export default PrivateRoute;
