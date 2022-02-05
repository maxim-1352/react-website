import React from "react";
import Man from "../../assets/img/man.jpg";
import { Link } from "react-router-dom";
import "./Company.scss";

const Company = () => {
  return (
    <div className="company">
      <div className="container">
        <div className="company-box">
          <div className="desc">
            <h2>Welcome to Our Company</h2>
            <h3> Aliquam lacus purus, auctor malesuada</h3>
            <div className="p-box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas ad odio dignissimos beatae nisi error dolor, sequi ex
                blanditiis at necessitatibus eveniet odit similique doloremque
                mollitia omnis iure reprehenderit atque?
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas ad odio dignissimos beatae nisi error dolor, sequi ex
                blanditiis at necessitatibus eveniet odit similique doloremque
                mollitia omnis iure reprehenderit atque?
              </p>
            </div>

            <Link to="/blog" className="a-btn">
              Know more
            </Link>
          </div>
          <div className="image">
            <img src={Man} alt="pic" className="i-man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
