import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <h2>We are Certified Engineers</h2>
          <h1>
            Construction Services <br /> <span>Creative & Professional</span>
          </h1>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
          <div className="btn-box">
            <Link to="/blog" className="a-btn">
              Know more
            </Link>
            <Link to="/portfolio" className="a-btn">
              View project
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
