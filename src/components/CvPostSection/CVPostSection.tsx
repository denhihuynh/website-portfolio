import "./CVPostSection.css";
import React, { FC, useCallback } from "react";
import { postYearList, postByYearMapping } from "./CVPosts";
import { YearLine } from "../";
import { LineType } from "../YearLine/YearLine";

type Props = {};

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
    (index: number): "post-border-left" | "post-border-right" =>
      index % 2 === 0 ? "post-border-left" : "post-border-right",
    []
  );

  return (
    <section className="cv-post-section">
      {postYearList.map((startYear, yearListIndex) => (
        <>
          {yearListIndex === 0 && (
            <YearLine lineType={getLineType(yearListIndex)} />
          )}
          {postByYearMapping[startYear].map((post, postIndex) => (
            <div
              key={postIndex}
              className={[
                "post-container",
                getPostBorderSideClassName(yearListIndex),
              ].join(" ")}
            >
              <section className="post">
                <h2>{post.title}</h2>
                <h3>{post.role}</h3>
                {post.description.map((description, index) => (
                  <p key={index}>{description}</p>
                ))}
                <p>
                  {post.technicalEnv !== "" && (
                    <p className="bold">Technical environment: </p>
                  )}
                  {post.technicalEnv}
                </p>
              </section>
            </div>
          ))}
          <YearLine
            startYear={startYear}
            lineType={getLineType(yearListIndex + 1)}
          />
        </>
      ))}
    </section>
  );
};
