import * as React from 'react';
import styled from 'styled-components';

interface Props {
  size?: string;
  color?: string;
}

export const Sport = (props: Props) => {
  return (
    <Div size={props.size}>
      <svg
        version="1.2"
        baseProfile="tiny"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 256 256"
        height="256px"
        width="256px"
      >
        <g id="XMLID_2_">
          <path
            id="XMLID_7_"
            d="M131.9,169.1c-2.3,0.9-5,1.4-7.7,1.4c-2.9,0-5.7-0.3-8.4-1.1l-29.7,68.3c-2.7,6.3-10.2,8.4-16.7,4.8
     c-6.5-3.7-9.6-11.7-6.8-18l36.4-83.6h46.5v-7.8l23.5-10.9c6.2-3,14.2,2.1,15.8,8.6l11.5,46.2c1.6,6.6-2.4,13.2-8.9,14.8
     c-6.6,1.6-13.2-2.4-14.9-8.9l-7.3-29.5L131.9,169.1z"
          />
          <path
            id="XMLID_6_"
            d="M153.3,121.2C204.2,95.9,223.9,9.5,223.9,2.3h-7c-2.6,18-24.5,90.2-63.6,111.1V121.2z"
          />
          <path
            id="XMLID_5_"
            d="M59.4,102.3c2.7,4.2,8,6,12.8,4l26.9-10.5v37.3h46.5V89.9l41.7-66.6c3.1-4.9,1.6-11.3-3.3-14.4
     c-4.9-3.1-11.3-1.6-14,3.1l-35.4,56.6l-21.3,0.1c-1.4,0-2.7,0.2-4.1,0.8L72.3,83.8l-19-28.8c-3.1-4.8-9.6-6.2-14.4-3.1
     c-4.9,3.1-6.3,9.6-3.2,14.5L59.4,102.3z"
          />
          <path
            id="XMLID_4_"
            d="M119.1,64.8c10.2,0,18.5-8.3,18.5-18.5s-8.3-18.5-18.5-18.5c-10.2,0-18.5,8.3-18.5,18.5
     S108.9,64.8,119.1,64.8z"
          />
          <polygon
            id="XMLID_3_"
            points="145.5,253.8 145.5,170.5 137.7,174.1 137.7,253.8 	"
          />
        </g>
      </svg>
    </Div>
  );
};

const Div = styled.div<{ size?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => (props.size === 'small' ? 'scale(0.1)' : 'scale(0.4)')};
`;
