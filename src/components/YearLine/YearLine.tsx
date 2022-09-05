import "./YearLine.css";
import React, { FC } from "react";

export type LineType =
  | "left-start"
  | "left-end"
  | "left-to-right"
  | "right-to-left"
  | "right";

type Props = {
  startYear?: number;
  lineType: LineType;
};

export const YearLine: FC<Props> = ({ startYear, lineType }) => {
  return (
    <div className="year-line-container">
      {["left-start", "right-to-left"].includes(lineType) && (
        <div>
          <div className="year-line-padding" />
          <div className="year-edge-top-left" />
        </div>
      )}
      {["left-end", "left-to-right"].includes(lineType) && (
        <div className="year-edge-left-bottom" />
      )}
      {lineType === "right" && <div className="year-line-padding" />}

      <div className="year-horizontal-line-container">
        <div className="year-horizontal-line-half-hidden" />
        <div className="year-horizontal-line">
          {lineType === "right" && (
            <>
              <div className="year-horizontal-line-half-hidden" />
              <div className="year-line-half-hidden" />
            </>
          )}
          <div
            className={
              ["left-start", "left-end", "right"].includes(lineType)
                ? "year-line-half-top"
                : "year-line-top"
            }
          />
        </div>
      </div>

      {["left-start", "left-end"].includes(lineType) && (
        <div className="year-line-padding" />
      )}
      {lineType === "left-to-right" && (
        <div>
          <div className="year-line-padding" />
          <div className="year-edge-top-right" />
        </div>
      )}
      {["right-to-left", "right"].includes(lineType) && (
        <div className="year-edge-right-bottom" />
      )}
      <div className="year-circle">{startYear ?? "Now"}</div>
    </div>
  );
};
