import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faTruckMedical,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We are a company whose vision is to be the world’s leading technology
          company. Our mission is to offer innovative, high-quality products and
          services designed with an eye towards efficiency, speed and usability
          without compromising safety or reliability.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Data and Analytics"
          description="It's an incredible time to be a data leader since data is 
          used more broadly than ever in organisations. The choices you make as 
          a data leader are crucial to almost every business need, project, and 
          collaboration since your vision, tenacity, and creativity support the development of innovative working methods."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Artificial Intelligence"
          description="The right way to deal with AI improvement can genuinely take your business to a higher level.
          See the reason why you ought to entrust us with your AI-based advanced items.
          Full-administration way to deal with AI improvement We generally make an honest effort to oblige client necessities, 
          "
          icon={faHeartPulse}
        />

        <InformationCard
          title="Cyber Security"
          description="The rising reception of cloud and steadily advancing digital assaults are extending 
          danger borders in the computerized world. Digital safeguard is not any more about guaranteeing consistence; it is about proactive moderation of different kinds of hazard."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
