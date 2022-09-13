import styled from "styled-components";

type EdgeProps = {
  dimension: number;
};

const Edge = styled.div<EdgeProps>`
  width: ${(props) => props.dimension}px;
  height: ${(props) => props.dimension}px;
`;

type EdgeCurveProps = {
  thickness: string;
};

export const EdgeTopLeft = styled(Edge)<EdgeCurveProps>`
  border-top: ${(props) => props.thickness} solid black;
  border-left: ${(props) => props.thickness} solid black;
  border-radius: 100% 0 0 0;
`;

export const EdgeLeftBottom = styled(Edge)<EdgeCurveProps>`
  border-left: ${(props) => props.thickness} solid black;
  border-bottom: ${(props) => props.thickness} solid black;
  border-radius: 0 0 0 100%;
`;

export const EdgeTopRight = styled(Edge)<EdgeCurveProps>`
  border-top: ${(props) => props.thickness} solid black;
  border-right: ${(props) => props.thickness} solid black;
  border-radius: 0 100% 0 0;
`;

export const EdgeRightBottom = styled(Edge)<EdgeCurveProps>`
  border-bottom: ${(props) => props.thickness} solid black;
  border-right: ${(props) => props.thickness} solid black;
  border-radius: 0 0 100% 0;
`;
