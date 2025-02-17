import React from "react";
import AboutComponentMini from "../../Subcomponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Welcome to , where we turn dreams into reality. Since our inception, we've been dedicated to providing outstanding service, unmatched expertise, and unparalleled access to the most luxurious properties in the region.</p>
          <p>Our mission is to simplify the complex process of buying, selling, and renting properties, making it a seamless and enjoyable experience for our clients. We aim to build lasting relationships founded on trust, transparency, and integrity.</p>
          <p>Our team of experienced professionals is passionate about real estate and committed to helping you navigate the ever-evolving property market. With extensive knowledge and a client-centric approach, we strive to exceed your expectations at every step.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;