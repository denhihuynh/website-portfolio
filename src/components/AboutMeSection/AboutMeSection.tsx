import "./AboutMeSection.css";
import React, { FC } from "react";

type Props = {};

export const AboutMeSection: FC<Props> = () => {
  return (
    <section className="about-me-section">
      <h2>Hello and welcome</h2>
      <p>
        I'm Denhi. I can't believe that you actually found my page and are still
        reading this. Unbelievable. I am a developer who is passionate about
        web- app- and AWS development. I am a freelancer who is available for
        contract work sometimes.
      </p>
      <p>
        This page serves as a small summary of my previous experience. A short
        description of my engagements can be found below. Please contact me for
        a more detailed resume or for a potential collaboration. Have a great
        day!
      </p>
    </section>
  );
};
