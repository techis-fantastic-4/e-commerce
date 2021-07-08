import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/signup"} component={SignUp} />
      </Switch>
    </>
  );
};
export default Router;
