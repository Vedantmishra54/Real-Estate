import React from "react"; 
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>can you contact here</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquid
          similique voluptas!
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
                <span>vm@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No.123 Sector A-1 Mumbai</span>
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