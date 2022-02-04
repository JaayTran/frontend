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
import ProductScreen from "./components/ProductScreen";

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
        <SimpleReactLightbox>
          <Route path="/menu" component={Menu} />
        </SimpleReactLightbox>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
