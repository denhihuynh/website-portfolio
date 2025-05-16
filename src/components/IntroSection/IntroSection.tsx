import React, { FC } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../utils/breakpoints";
import { keyframes } from "styled-components";

type Props = {};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); // Optional: slide up slightly
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.section`
  background: linear-gradient(135deg, #5b9b6c, #314b31);
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}) {
    padding-top: 15vh;
    justify-content: space-between;
    align-items: center;
  }
`;

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15%;
  padding: 0;

  @media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}) {
    margin: 16px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin: 0 0 16px 0;
  color: white;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.5s;

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  width: 30%;
  color: white;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 0.8s;

  @media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}) {
    width: 100%;
  }

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    font-size: 1rem;
  }
`;

const Image = styled.img`
  height: 600px;
  position: absolute;
  right: 10%;
  bottom: 0;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
  animation-delay: 1.2s;

  @media screen and (max-width: ${BREAKPOINTS.SMALL_SCREEN}) {
    height: 500px;
    position: relative;
    left: 0;
    right: 0;
    align-self: center;
  }

  @media screen and (max-width: ${BREAKPOINTS.MOBILE}) {
    height: 250px;
    position: relative;
    left: 0;
    right: 0;
    align-self: center;
  }
`;

const CTAButton = styled.button`
  background-color: #162919;
  border: none;
  border-radius: 20px;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: black;
  }
`;

export const IntroSection: FC<Props> = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>Denhi Huynh</Title>
        <Title as="h2">Software developer</Title>
        <Subtitle>
          A web, app and cloud (aws & gcp) developer with a passion for
          delivering high-quality results. Check out my portfolio to see my past
          projects. Contact me for my resume or to discuss collaboration
          opportunities.
        </Subtitle>
        <a href="#CV-post-section">
          <CTAButton>Learn more</CTAButton>
        </a>
      </TitleContainer>
      <Image src="assets/profile-blackwhite.png" alt="profile" />
    </Wrapper>
  );
};
