import React, { FC } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/breakpoints";

type Props = {};

const Wrapper = styled.section`
  width: 100%;
  padding: 16px 25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}) {
    padding: 0px 32px;
  }
`;

export const AboutMeSection: FC<Props> = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
