import React from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Phone,
  Map,
  Mail,
} from "../../socialicons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-about">
            <h3>About company</h3>
            <h2>
              Construction Services <br /> <span>Creative & Professional</span>
            </h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit
            </p>
            <div className="social">
              <a href="/">
                <Facebook />
              </a>
              <a href="/">
                <Twitter />
              </a>
              <a href="/">
                <Youtube />
              </a>
              <a href="/">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="footer-link">
            <h2>Explor link</h2>
            <ul>
              <li>
                <a href="/">Our services</a>
              </li>
              <li>
                <a href="/">Meet our team</a>
              </li>
              <li>
                <a href="/">Forum</a>
              </li>
              <li>
                <a href="/">Help center</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Our terms</a>
              </li>
              <li>
                <a href="/">Site map</a>
              </li>
            </ul>
          </div>
          <div className="post">
            <h2>Latest post</h2>
            <div className="post-box">
              <div className="day">
                <span className="number">20</span>
                <span className="month">aug</span>
              </div>
              <p>Luptatum omittantur duo ne mpetus indoctum</p>
            </div>
            <div className="post-box">
              <div className="day">
                <span className="number">20</span>
                <span className="month">aug</span>
              </div>
              <p>Luptatum omittantur duo ne mpetus indoctum</p>
            </div>
            <div className="post-box">
              <div className="day">
                <span className="number">20</span>
                <span className="month">aug</span>
              </div>
              <p>Luptatum omittantur duo ne mpetus indoctum</p>
            </div>
            <div className="post-box">
              <div className="day">
                <span className="number">20</span>
                <span className="month">aug</span>
              </div>
              <p>Luptatum omittantur duo ne mpetus indoctum</p>
            </div>
          </div>
          <div className="contact-us">
            <h2>Contact us</h2>
            <div className="adress">
              <span className="left">
                <Map />
              </span>
              <span className="right">123 new Line, London UK</span>
            </div>
            <div className="mail">
              <span className="left">
                <Mail />
              </span>
              <span className="right">
                <a href="mailto:hello@example.com">hello@example.com</a>
              </span>
            </div>
            <div className="phone">
              <span className="left">
                <Phone />
              </span>
              <span className="right">
                <a href="tel:+1234-">+123-456-7890</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
