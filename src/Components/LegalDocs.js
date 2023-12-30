import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Tech Enthusiast 
          {/* <span className="legal-siteSign">+</span> */}
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Tech Enthusiast believe in progress by innovation. We continually
          developing ways to keep our business ahead of the curve, so we can
          continue delivering the best products and services. We are Canadian
          Innovative IT consultancy
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          Your privacy is paramount to us. Our Privacy Policy outlines how we
          collect, use, and protect your personal information. We ensure secure
          data handling, and you can trust that your information is treated with
          the utmost confidentiality.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          When using Tech Enthusiast, you agree to our Terms of Service. This
          includes guidelines for using our platform, interacting with
          developers, and the responsibilities of both parties. It's essential
          to understand these terms to ensure a smooth experience for all users.
        </p>

        <p className="legal-title">Solutions</p>
        <p className="legal-description">
          Our platform connects you with expert developers who provide online
          sultions. These consultations are not a replacement for in-person
          visits but serve as a convenient option. It's crucial to provide
          accurate and complete information to receive the best possible
          outcome.
        </p>

        {/* <p className="legal-title">How it Works</p>
        <p className="legal-description">
          Health Plus is designed to simplify healthcare access. You can choose
          a specialist, schedule an appointment, and engage in a virtual
          consultation. Our specialists offer personalized advice and treatment
          plans tailored to your needs. Please remember that emergencies require
          immediate medical attention and should be directed to your local
          medical facility.
        </p> */}
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Tech Enthusiast. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
