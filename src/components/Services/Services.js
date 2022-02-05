import React from "react";
import { data2 } from "../../data";
import "./Services.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services-box">
          <h2>Our services</h2>
          <div className="services-wrap">
            {data2.map((d, i) => (
              <div className="item" key={i}>
                <div className="services-wrap-img">
                  <img src={d.img} alt={d.alt} />
                </div>

                <h3 className="title">{d.title}</h3>

                <p>{d.desc}</p>
                <a href="/" className="a-btn">
                  {d.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
