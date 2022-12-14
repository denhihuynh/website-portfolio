import React, { FC } from "react";
import styled from "styled-components";
import {
  EdgeTopLeft,
  EdgeLeftBottom,
  EdgeTopRight,
  EdgeRightBottom,
} from "./YearEdges";

import {
  LinePadding,
  HorizontalLineContainer,
  LineHalfHidden,
  LineEdgePadding,
  HorizontalLine,
  LineTop,
  LineTopHalf,
} from "./Lines";

const YearLineContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

type TextCircleProps = {
  dimension: number;
  diameter: number;
  thickness: string;
};

const TextCircle = styled.div<TextCircleProps>`
  position: absolute;
  top: ${(props) =>
    `calc(${props.dimension}px - ${props.thickness} - ${
      props.diameter / 2
    }px)`};
  left: ${(props) => `calc(50% - ${props.diameter / 2}px)`};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: ${(props) => `${props.diameter}px`};
  height: ${(props) => `${props.diameter}px`};
  border-radius: 50%;
  background-color: black;
  color: white;
`;

export type LineType =
  | "left-start"
  | "left-end"
  | "left-to-right"
  | "right-to-left"
  | "right";

type Props = {
  startYear?: number;
  lineType: LineType;
  thickness: string;
  edgeDimension: number;
};

export const YearLine: FC<Props> = ({
  startYear,
  lineType,
  thickness,
  edgeDimension,
}) => {
  return (
    <YearLineContainer>
      {["left-start", "right-to-left"].includes(lineType) && (
        <div>
          <LinePadding width={edgeDimension} thickness={thickness} />
          <EdgeTopLeft dimension={edgeDimension} thickness={thickness} />
        </div>
      )}
      {["left-end", "left-to-right"].includes(lineType) && (
        <EdgeLeftBottom dimension={edgeDimension} thickness={thickness} />
      )}
      {lineType === "right" && (
        <LinePadding width={edgeDimension} thickness={thickness} />
      )}

      <HorizontalLineContainer>
        <LineEdgePadding dimension={edgeDimension} thickness={thickness} />
        <HorizontalLine>
          {lineType === "right" && (
            <>
              <LineEdgePadding
                dimension={edgeDimension}
                thickness={thickness}
              />
              <LineHalfHidden />
            </>
          )}
          {["left-start", "left-end", "right"].includes(lineType) ? (
            <LineTopHalf thickness={thickness} />
          ) : (
            <LineTop thickness={thickness} />
          )}
        </HorizontalLine>
      </HorizontalLineContainer>

      {["left-start", "left-end"].includes(lineType) && (
        <LinePadding width={edgeDimension} thickness={thickness} />
      )}
      {lineType === "left-to-right" && (
        <div>
          <LinePadding width={edgeDimension} thickness={thickness} />
          <EdgeTopRight dimension={edgeDimension} thickness={thickness} />
        </div>
      )}
      {["right-to-left", "right"].includes(lineType) && (
        <EdgeRightBottom dimension={edgeDimension} thickness={thickness} />
      )}
      <TextCircle diameter={60} dimension={edgeDimension} thickness={thickness}>
        {startYear ?? "Now"}
      </TextCircle>
    </YearLineContainer>
  );
};
