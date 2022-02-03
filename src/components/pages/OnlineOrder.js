import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "../../App.css";
import OrderHomeScreen from "../OrderHomeScreen";
import ProductScreen from "../ProductScreen";
import CartScreen from "./CartScreen";

export default function OnlineOrder() {
  return (
    <BrowserRouter>
      <Route path="/order" exact={true} component={OrderHomeScreen} />
      <Route path="/order/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
    </BrowserRouter>
  );
}
