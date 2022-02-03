import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import ContactUs from "./components/pages/ContactUs";
import Footer from "./components/Footer";
import OnlineOrder from "./components/pages/OnlineOrder";
import SimpleReactLightbox from "simple-react-lightbox";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/order" component={OnlineOrder} />
            <SimpleReactLightbox>
              <Route path="/menu" component={Menu} />
            </SimpleReactLightbox>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
