import React, { FC, useCallback } from "react";
import { postYearList, postByYearMapping } from "./CVPosts";
import { YearLine } from "../";
import { LineType } from "../YearLine/YearLine";
import styled from "styled-components";

type Props = {};

const Wrapper = styled.section`
  width: 100%;
  padding: 0px 20%;
`;

type PostContainerProps = {
  borderTo: "left" | "right";
  borderThickness: string;
};

const PostContainer = styled.div<PostContainerProps>`
  width: 100%;
  ${(props) =>
    props.borderTo === "left" &&
    `border-left: ${props.borderThickness} solid black`}
  ${(props) =>
    props.borderTo === "right" &&
    `border-right: ${props.borderThickness} solid black`}
`;

const Post = styled.section`
  padding: 1px 64px;
  margin: 0;
`;

const Bold = styled.p`
  font-weight: 600;
`;

type Direction = "left" | "right";

const LINE_THICKNESS = "5px";

export const CVPostSection: FC<Props> = () => {
  const getLineType = useCallback((index: number): LineType => {
    if (index === 0) {
      return "left-start";
    }
    if (index === postYearList.length) {
      return (index + 1) % 2 === 0 ? "left-end" : "right";
    }
    return index % 2 === 0 ? "right-to-left" : "left-to-right";
  }, []);

  const getPostBorderSideClassName = useCallback(
    (index: number): Direction => (index % 2 === 0 ? "left" : "right"),
    []
  );

  return (
    <Wrapper>
      {postYearList.map((startYear, yearListIndex) => (
        <>
          {yearListIndex === 0 && (
            <YearLine
              lineType={getLineType(yearListIndex)}
              thickness={LINE_THICKNESS}
            />
          )}
          {postByYearMapping[startYear].map((post, postIndex) => (
            <PostContainer
              key={postIndex}
              borderTo={getPostBorderSideClassName(yearListIndex)}
              borderThickness={LINE_THICKNESS}
            >
              <Post>
                <h2>{post.title}</h2>
                <h3>{post.role}</h3>
                {post.description.map((description, index) => (
                  <p key={index}>{description}</p>
                ))}
                <p>
                  {post.technicalEnv !== "" && (
                    <Bold>Technical environment: </Bold>
                  )}
                  {post.technicalEnv}
                </p>
              </Post>
            </PostContainer>
          ))}
          <YearLine
            startYear={startYear}
            lineType={getLineType(yearListIndex + 1)}
            thickness={LINE_THICKNESS}
          />
        </>
      ))}
    </Wrapper>
  );
};
