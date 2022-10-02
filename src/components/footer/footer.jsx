import { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import facebook from "../../assets/facebook-icon.svg";
import instagram from "../../assets/instagram-icon.svg";
import twitter from "../../assets/twitter-icon.svg";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    // console.log(email.current.value);
    setTimeout(() => {
      setSubscribed(false);
      setInvalidEmail(false);
    }, 5000);
    const email = e.target.email.value;
    if (!email) {
      setInvalidEmail(true);
    } else {
      fetch(
        "https://module7-8965a-default-rtdb.firebaseio.com/subscribers.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
          }),
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("Subscribed", res);
          setSubscribed(true);
          e.target.reset();
        });
    }
  }

  return (
    <>
      <div className="row">
        <div className="footer">
          <div className="footer-main">
            <h3>AccioJob</h3>
            <div className="footer-socials">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
          <hr />
          <div className="footer-sitemap">
            <div className="footer-column">
              <h5>Company Info</h5>
              <ul>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Carrier</Link>
                </li>
                <li>
                  <Link to="/">We are hiring</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Legal</h5>
              <ul>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Carrier</Link>
                </li>
                <li>
                  <Link to="/">We are hiring</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Features</h5>
              <ul>
                <li>
                  <Link to="/">Business Marketing</Link>
                </li>
                <li>
                  <Link to="/">User Analytic</Link>
                </li>
                <li>
                  <Link to="/">Live Chat</Link>
                </li>
                <li>
                  <Link to="/">Unlimited Support</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Resources</h5>
              <ul>
                <li>
                  <Link to="/">IOS & Android</Link>
                </li>
                <li>
                  <Link to="/">Watch a Demo</Link>
                </li>
                <li>
                  <Link to="/">Customers</Link>
                </li>
                <li>
                  <Link to="/">API</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h5>Get In Touch</h5>
              <form onSubmit={handleSubscribe}>
                <input
                  className="email-input"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                />
                <button className="subscribe-button" type="submit">
                  Subscribe
                </button>
              </form>
              <p className="random-text">Lorem impsum dolor amit</p>

              {invalidEmail && (
                <p className="invalid-email">Enter a valid email.</p>
              )}
              {subscribed && (
                <p className="subscribed">
                  We will get in touch with you soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="copyrights">Made With ❤️ at Acciojob</div>
    </>
  );
};

export default Footer;
