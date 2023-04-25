import React from "react";
import NavBar from "./NavBar";
import logologo from "../Images/work-images/ac-units.jpg";
import head from "../Images/work-images/609.jpg";
import "../CSS/service.css";
import Footer from "./Footer";

const services = () => {
  return (
    <div className="main-services-wrapper">
      <NavBar />
      <img
        className="service-hero-image"
        src={head}
        alt="Thresher Construction Logo"
      />
      <div className="service-container">
        <div className="service-left-content">
          <div className="redirect-div">
            
          </div>
          <img
            className="service-image"
            src={logologo}
            alt="Thresher Construction Logo"
          />
          <p className="service-paragraph">
            Winter is coming, and you need your heating system to be functional
            to keep your family comfortably. Winter weather is chilly and damp
            forcing most homeowners to invest in a reliable heating system. But
            what happens when the heating system fails in the coldest months of
            the year?
          </p>
          <p className="service-paragraph">
            If your heating system is giving you a hard time, you need a
            dependable heating repair services to help restore the comfort of
            your home. Professional heating installation companies such as
            California Air Systems Inc., which provides essential services to
            keep your heating system at peak performance regardless of the
            season.
          </p>
          <p className="service-paragraph">
            As a full-service provider, California Air Systems Inc. has the
            necessary know-how and experience needed to address any heating
            maintenance and repairs. Our services are designed to extend the
            life of your heating system and cutting down your heating utility
            expenses.
          </p>
          <p className="service-paragraph">
            In the cold and chilly days, a working heating system is an
            essential element in keeping the indoor environment comfortable,
            safe, and healthy. Our dedication to quality service is evident in
            our heavy investment in labor, training, and equipment.
          </p>
          <p className="service-paragraph">
            We know how frustrating dealing with an equipment malfunction can
            be, especially when your contractor is not available. At California
            Air Systems Inc. we strive to respond quickly to all inquiries. Our
            team works tirelessly to address every heating repair job in a
            time-conscious manner. When you need heating repair or installation
            in Bakersfield, you can trust us with the job.
          </p>
          <p className="service-paragraph">
            Maintaining your heating system gives you the much-needed peace of
            mind during winter. Whether you need a new installation or want the
            existing system repaired or maintained, we have the experts ready to
            assist you. While most companies will talk you into buying new
            equipment, we are committed to providing customers with the best and
            budget options. We offer a vast range of HVAC systems installation,
            repair, and maintenance services for domestic and commercial
            clients. Our technicians pride themselves with a vast knowledge of
            HVAC system and thus offer a vast range of renowned brans for
            heating and cooling.
          </p>
        </div>
        <div className="service-right-content">
          <h1 className="service-right-heading">Our Services</h1>
          <ul className="service-list">
            <li><a href="google.com">Hvac Services</a></li>
            <li><a href="google.com">AC Services</a></li>
            <li><a href="google.com">this is the first item</a></li>
            <li><a href="google.com">this is the first item</a></li>
            <li><a href="google.com">this is the first item</a></li>
          </ul>
          <div>
            <h1>Our Reviews</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default services;
