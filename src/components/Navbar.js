import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { signout } from "../actions/userActions";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/images/logo.png" height="80px" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-links" onClick={closeMobileMenu}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-links" onClick={closeMobileMenu}>
                Order Online
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contactus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                Cart
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#" className="nav-links">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                  </Link>
                  <ul className="dropdown-content">
                    {userInfo && userInfo.isAdmin && (
                      <div>
                        <li>
                          <Link
                            to="/dashboard"
                            className="nav-links"
                            onClick={closeMobileMenu}
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/productlist"
                            className="nav-links"
                            onClick={closeMobileMenu}
                          >
                            Products
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/orderlist"
                            className="nav-links"
                            onClick={closeMobileMenu}
                          >
                            All Orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/userlist"
                            className="nav-links"
                            onClick={closeMobileMenu}
                          >
                            Users
                          </Link>
                        </li>
                      </div>
                    )}
                    <li>
                      <Link
                        to="/profile"
                        className="nav-links"
                        onClick={closeMobileMenu}
                      >
                        User Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/orderhistory"
                        className="nav-links"
                        onClick={closeMobileMenu}
                      >
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#signout"
                        className="nav-links"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link
                  to="/signin"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
