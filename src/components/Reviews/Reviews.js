import React from "react";
import person1 from "../../assets/img/person1.jpg";
import person2 from "../../assets/img/person2.jpg";
import { Quote } from "../../socialicons";
import "./Reviews.scss";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="container">
        <div className="reviews-box">
          <h2>customer reviews</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit
          </p>
        </div>
        <div className="reviews-items">
          <div className="review-item">
            <div className="review-item-desc">
              <Quote fill="#989898" />
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
              <div className="arrow-down"></div>
            </div>

            <div className="img-wrap">
              <img src={person1} alt="alt" />
              <span>John Smith</span>
            </div>
          </div>
          <div className="review-item ">
            <div className="review-item-desc yellow-bg">
              <Quote fill="#fff" />
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
              <div className="arrow-down yellow-bg"></div>
            </div>

            <div className="img-wrap">
              <img src={person2} alt="alt" />
              <span>John Smith</span>
            </div>
          </div>
          <div className="review-item">
            <div className="review-item-desc">
              <Quote fill="#989898" />
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit,
              </p>
              <div className="arrow-down"></div>
            </div>

            <div className="img-wrap">
              <img src={person1} alt="alt" />
              <span>John Smith</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contacts">
        <div className="container">
          <div className="contacts-box">
            <div className="text">
              <h2>Do you have any questions?</h2>

              <h3>Feel free to contact us!</h3>
            </div>
            <form className="form">
              <input type="text" className="name" placeholder="Name" />
              <input type="text" className="email" placeholder="Email" />
              <textarea className="textarea" placeholder="Message"></textarea>
              <button type="submit" className="submit">
                Submut
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
