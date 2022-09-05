import React, { FC } from "react";

type Props = {};

export const IntroSection: FC<Props> = () => {
  return (
    <section className="intro">
      <section className="intro-title-container">
        <h1 className="intro-title">Denhi Huynh</h1>
        <h2 className="intro-title">Software developer</h2>
      </section>
      <img id="profile" src="assets/profile-blackwhite.png" alt="profile" />
    </section>
  );
};
