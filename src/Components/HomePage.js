import React from "react";
import NavBar from "./NavBar";
import Footer from './Footer'
import AcUnits from "../Images/work-images/ac-units-above.jpg";
import StructuralSteel from "../Images/work-images/work-car.png";
import GeneralContracting from "../Images/work-images/finished-house.jpeg";
import WorkerTest from "../Images/workers/Kyle-Carter.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import "../CSS/homepage.css";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="hero-images">
        <img className="ac-units" src={AcUnits} alt="AC Units Work" />
        <img
          className="structural-steel"
          src={StructuralSteel}
          alt="Structural Steel Work"
        />
        <img
          className="general-contracting"
          src={GeneralContracting}
          alt="General Contracting Work"
        />
      </div>
      <div className="expert-wrapper">
        <div className="expert-heading">
          <h1 className="expert-heading-top">WE ARE EXPERT IN RESIDENTIAL</h1>
          <h1 className="expert-heading-bottom">HVAC SERVICE AND REPAIR</h1>
          <button className="free-quotes-button button-home">
            FREE QUOTES <AiOutlineArrowRight style={{ fontSize: "20px" }} />
          </button>
        </div>
        <div className="expert-content">
          <p className="expert-paragraph-top">
            California Systems Inc. ranks high as a top-notch heating and air
            conditioning services provider in Bakersfield. Founded in 2005, we
            have successfully served hundreds of residential and commercial
            customer with the highest standards of professionalism.
          </p>
          <p className="expert-paragraph-bottom">
            Among the services that we offer to keep our loyal customers
            comfortable in their homes and businesses, including cooling and
            heating system installation and maintenance services, air
            conditioning repairs and installations services. Our clients can
            choose any of the services that suit their needs as far as AC,
            cooling and heating systems in home or business are concerned.
          </p>
        </div>
      </div>
      <div className="services-wrapper">
        <div className="services-heading-section">
          <h1 className="services-main-heading">
            QUALITY WORK WITH ON TIME SERVICE
          </h1>
          <p>
            Enhancing Your Level of Indoor Comfort & Control The finest heating,
            air conditioning, indoor air quality, and smart home automation
            services.
          </p>
        </div>
        <div className="services-images">
          <div className="services-image-wrapper">
            <img
              className="services-single-image"
              src={AcUnits}
              alt="AC Units Work"
            />
            <h3>HVAC SERVICES</h3>
          </div>
          <div className="services-image-wrapper">
            <img
              className="services-single-image"
              src={StructuralSteel}
              alt="Structural Steel Work"
            />
            <h3>STRUCTURAL STEEL</h3>
          </div>
          <div className="services-image-wrapper">
            <img
              className="services-single-image"
              src={GeneralContracting}
              alt="General Contracting Work"
            />
            <h3>GENERAL CONTRACTING</h3>
          </div>
        </div>
      </div>
      <div className="call-us-section">
        <h1>LEADERS IN QUALITY HVAC AND CONSTRUCTION</h1>
        <p>
          If you’re in need of an AC or Heating repair, replacement, or service.
        </p>
        <button className="free-quotes-button button-home">
          <BsTelephoneForward
            style={{ fontSize: "20px", marginRight: "10px" }}
          />{" "}
          CALL US: (661) 213-6125
        </button>
      </div>
      <div className="trained-professionals-section">
        <div className="trained-professionals-heading">
          <h1>OUR TEAM OF TRAINED PROFESSIONALS</h1>
          <p>are ready to help, schedule now.</p>
        </div>
        <div className="trained-professionals-images">
          <img
            className="workers-single-image"
            src={WorkerTest}
            alt="Worker 1"
          />
          <img
            className="workers-single-image"
            src={WorkerTest}
            alt="Worker 2"
          />
          <img
            className="workers-single-image"
            src={WorkerTest}
            alt="Worker 3"
          />
        </div>
        </div>
        <Footer/>
    </div>
  );
};

export default HomePage;
