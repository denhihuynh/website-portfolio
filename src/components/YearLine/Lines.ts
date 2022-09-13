import styled from "styled-components";

type LinePaddingProps = {
  width: number;
  thickness: string;
};

export const LinePadding = styled.div<LinePaddingProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => `calc(${props.width}px - ${props.thickness})`};
`;

export const HorizontalLineContainer = styled.div`
  width: 100%;
`;

export const LineHalfHidden = styled.div`
  width: 50%;
`;

type LineEdgePaddingProps = {
  dimension: number;
  thickness: string;
};

export const LineEdgePadding = styled.div<LineEdgePaddingProps>`
  height: ${(props) => `calc(${props.dimension}px - ${props.thickness})`};
`;

export const HorizontalLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

type LineTopProps = {
  thickness: string;
};
export const LineTop = styled.div<LineTopProps>`
  width: 100%;
  ${(props) => `border-top: ${props.thickness} solid black`};
`;

export const LineTopHalf = styled.div<LineTopProps>`
  width: 50%;
  ${(props) => `border-top: ${props.thickness} solid black`};
`;
