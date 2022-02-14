import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/Footer";
import SimpleReactLightbox from "simple-react-lightbox";
import CartScreen from "./components/pages/CartScreen";
import OrderHomeScreen from "./components/pages/OrderHomeScreen";
import ProductScreen from "./components/pages/ProductScreen";
import SigninScreen from "./components/pages/SigninScreen";
import RegisterScreen from "./components/pages/RegisterScreen.js";
import ShippingAddressScreen from "./components/pages/ShippingAddressScreen";
import PaymentMethodScreen from "./components/pages/PaymentMethodScreen";
import PlaceOrderScreen from "./components/pages/PlaceOrderScreen";
import OrderScreen from "./components/pages/OrderScreen";
import OrderHistoryScreen from "./components/pages/OrderHistoryScreen";
import ProfileScreen from "./components/pages/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import ProductListScreen from "./components/pages/ProductListScreen";
import ProductEditScreen from "./components/pages/ProductEditScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/order" exact={true} component={OrderHomeScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/order/:id" component={ProductScreen} />
        <Route path="/signin" component={SigninScreen} exact />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/shipping" component={ShippingAddressScreen} />
        <Route path="/payment" component={PaymentMethodScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/orderdetails/:id" component={OrderScreen} />
        <Route path="/orderhistory" component={OrderHistoryScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route
          path="/product/:id/edit"
          component={ProductEditScreen}
          exact
        ></Route>
        <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
        <AdminRoute
          path="/productlist"
          component={ProductListScreen}
        ></AdminRoute>
        <SimpleReactLightbox>
          <Route path="/menu" component={Menu} />
        </SimpleReactLightbox>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
