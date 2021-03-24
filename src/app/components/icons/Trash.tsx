import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  size: string | null;
  color: string | null;
}

export const Trash = (props: Props) => {
  return (
    <Div scale={props.size}>
      <svg
        width="20"
        height="22"
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5H19"
          stroke={props.color ? props.color : 'var(--light-200)'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5H17Z"
          stroke={props.color ? props.color : 'var(--light-200)'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10V16"
          stroke={props.color ? props.color : 'var(--light-200)'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 10V16"
          stroke={props.color ? props.color : 'var(--light-200)'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Div>
  );
};

const Div = styled.div<{ scale: string | null }>`
  transform: ${props => (props.scale === 'large' ? 'scale(1.5)' : 'null')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
