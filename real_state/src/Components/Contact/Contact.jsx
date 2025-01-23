import React from "react"; 
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>We're here to help you find your dream property. Get in touch with us through any of the following methods:</p>
        <p>
        Alternatively, you can fill out the form below, and one of our representatives will get back to you shortly.
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+91 9852347855</span>
              </div>
              <div>
                <p>Email</p>
                <span>vm85@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No.183 Sector A-1 Mumbai</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;