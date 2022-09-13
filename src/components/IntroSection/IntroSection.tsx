import React, { FC } from "react";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.section`
  background: linear-gradient(
    135deg,
    rgba(111, 194, 134, 1),
    rgba(110, 146, 110, 1)
  );
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 15%;
  padding: 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin: 0 0 16px 0;
  color: white;
`;

const Image = styled.img`
  height: 350px;
  position: absolute;
  right: 10%;
  bottom: 0;
`;

export const IntroSection: FC<Props> = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>Denhi Huynh</Title>
        <Title as="h2">Software developer</Title>
      </TitleContainer>
      <Image src="assets/profile-blackwhite.png" alt="profile" />
    </Wrapper>
  );
};
