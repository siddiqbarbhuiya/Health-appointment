import React from "react";
import Doctor from "../Assets/tech.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Tech Enthusiast</span>
        </h3>
        <p className="ba-description">
          Tech Enthusiast believe in progress by innovation. We continually developing
          ways to keep our business ahead of the curve, so we can continue
          delivering the best products and services. We are Canadian Innovative
          IT consultancy.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Best Professionals
        </p>
        {/* <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Emergency Care
        </p> */}
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          24/7 Support Live Chat
        </p>
        {/* <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />{" "}
          Enrollment Easy and Quick
        </p> */}

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}>
          <FontAwesomeIcon icon={faCalendarCheck} /> Get Hired
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
