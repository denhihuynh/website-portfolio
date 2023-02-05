import React, { FC } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/breakpoints";

type Props = {};

const Wrapper = styled.section`
  width: 100%;
  padding: 64px 25% 16px 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}) {
    padding: 0px 32px;
  }
`;

export const AboutMeSection: FC<Props> = () => {
  return (
    <Wrapper>
      Hi, I'm Denhi. 
      I'm glad you stumbled upon my portfolio website. 
      I'm a highly passionate web, app, and AWS developer with a strong emphasis on delivering high-quality results. 
      I offer my expertise as a freelancer and am available for contract work. Here, you'll find a brief overview of my past engagements. 
      If you're interested in learning more, please don't hesitate to reach out for a comprehensive resume or to discuss potential collaboration opportunities. 
    </Wrapper>
  );
};
