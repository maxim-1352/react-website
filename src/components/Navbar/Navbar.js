import React, { useState } from "react";
import { Burger, Close, Search, Close2 } from "../../socialicons";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const [value, setValue] = useState("");

  const [menu, setMenu] = useState(true);

  const searchHander = () => {
    setClicked(!clicked);
  };

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className="navbar-wrap">
      <div className="container">
        <div className="navbar">
          <Link to="/" className="logo">
            Construction <br /> <span>company tagline here</span>
          </Link>
          <nav className="nav">
            <ul className={menu ? "nav-box" : "mobile"}>
              <li>
                <Link to="/" onClick={menuHandler}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/page" onClick={menuHandler}>
                  Page
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={menuHandler}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={menuHandler}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/components" onClick={menuHandler}>
                  Components
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={menuHandler}>
                  Contact
                </Link>
              </li>
            </ul>

            {clicked ? (
              <input
                value={value}
                type="text"
                placeholder="Search..."
                className="searchActive"
                onChange={inputHandler}
              />
            ) : null}

            {!clicked ? (
              <Search search={searchHander} />
            ) : (
              <Close2 search={searchHander} />
            )}
          </nav>
          {menu ? (
            <Burger click={menuHandler} />
          ) : (
            <Close click={menuHandler} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
