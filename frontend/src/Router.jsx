import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import SignOut from "./containers/SignOut";
import ProductList from "./containers/ProductList";
import UserList from "./containers/UserList";
import ProductDetails from "./containers/ProductDetails";
import Cart from "./containers/Cart";
import { getUser } from "./reducks/user/selectors";
import { fetchUserFromLocalStorage } from "./reducks/user/operations";
import WishList from "./containers/WishList";

const Router = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const user = getUser(selector);

  useEffect(() => {
    dispatch(fetchUserFromLocalStorage());
    console.log(user);
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/wishlists"} component={WishList} />
        <Route exact path={"/signup"} component={SignUp} />
        <Route exact path={"/signin"} component={SignIn} />
        <Route exact path={"/signout"} component={SignOut} />
        <Route exact path={"/userlist-auth-sample"} component={UserList} />
        <Route exact path={"/cart"} component={Cart} />
        <Route exact path={"/products"} component={ProductList} />
        <Route path={"/products(/:id)?"} component={ProductDetails} />
      </Switch>
    </div>
  );
};
export default Router;
