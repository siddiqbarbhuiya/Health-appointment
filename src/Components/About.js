import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Tech Enthusiast believe in progress by innovation. We continually
          developing ways to keep our business ahead of the curve, so we can
          continue delivering the best products and services. We are Canadian
          Innovative IT consultancy.
        </p>

        {/* <h4 className="about-text-title">Your Solutions</h4> */}

        <SolutionStep
          title="Our Vision"
          description="We are a company whose vision is to be the world’s leading technology company. Our mission is to offer innovative, high-quality products and services designed with an eye towards efficiency, speed and usability without compromising safety or reliability. "
        />

        <SolutionStep
          title="Our Mission"
          description="We strive to be industry-leading at all times and set the standard for success and excellence. We measure our success by the value we create for our clients, employees and shareholders by delivering high-quality services."
        />

        {/* <SolutionStep
          title="Get Your Solutions"
          description="Our experienced doctors and specialists are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        /> */}
      </div>
    </div>
  );
}

export default About;
