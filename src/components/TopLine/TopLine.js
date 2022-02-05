import {
  Behance,
  Dribble,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
} from "../../socialicons";
import "./TopLine.scss";

const TopLine = () => {
  return (
    <>
      <div className="top-line">
        <div className="container">
          <div className="top-line-wrap">
            <ul className="contact">
              <li>
                <a href="tel:+1-2-3456789">
                  <svg
                    className="w-6 h-6 icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                  +1234-5678-9012
                </a>
              </li>
              <li>
                <a href="mailto:example@example.com">
                  <svg
                    className="w-6 h-6 icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  support@example.com
                </a>
              </li>
              <li>
                <svg
                  className="w-6 h-6 icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Mon-Sat 9:00-19:00
              </li>
            </ul>

            <div className="social">
              <ul className="social-wrap">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Behance />
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Dribble />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopLine;
