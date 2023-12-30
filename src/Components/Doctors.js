import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-5.png";
import profile2 from "../Assets/profile-6.jpeg";
import profile3 from "../Assets/profile-7.jpeg";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Making Idea's Happen.</span>
        </h3>

        <p className="dt-description">
          We Work As A Team. We Also Work As Many Teams, Individuals Or
          Whichever Combination - We Stand For Feeling And Being Optimal In
          Every Situation.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Kathryn Murphy"
          title="General Surgeons"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Jacob Jones"
          title="Hematologists"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Jenny Wilson"
          title="Endocrinologists"
          stars="4.7"
          reviews="450"
        />
        {/* <DoctorCard
          img={profile4}
          name="Dr. Albert Flores"
          title="Hematologists"
          stars="4.8"
          reviews="500"
        /> */}
      </div>
    </div>
  );
}

export default Doctors;
