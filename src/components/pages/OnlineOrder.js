import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "../../App.css";
import data from "../../data";
import OrderHomeScreen from "../OrderHomeScreen";
import ProductScreen from "../ProductScreen";

export default function OnlineOrder() {
  return (
    <BrowserRouter>
      <Route path="/order" exact={true} component={OrderHomeScreen} />
      <Route path="/order/:id" component={ProductScreen} />
    </BrowserRouter>
  );
}
