import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  size: number | null;
}

export const ChevronLeft = (props: Props) => {
  return (
    <Svg
      width={props.size ? props.size.toString() : '8'}
      height={props.size ? ((props.size / 8) * 14).toString() : '14'}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 13L1 7L7 1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Svg = styled.svg`
  path {
    stroke: #000000;
  }
`;
