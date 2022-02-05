import React from "react";
import { data1 } from "../../data";
import "./Choose.scss";

const Choose = () => {
  return (
    <div className="choose">
      <div className="container">
        <div className="choose-box">
          <h2>Why choose us?</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit,
          </p>
          <div className="icon-box">
            {data1.map((d, i) => (
              <div className="item" key={i}>
                <div className="item-circle">
                  <div className="inner-circle">
                    <img src={d.img} alt={d.alt} />
                  </div>
                </div>

                <h3 className="title">{d.title}</h3>

                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
