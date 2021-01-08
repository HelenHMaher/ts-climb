import * as React from 'react';

interface Props {
  size: number | null;
  color: string | null;
}

export const ChevronLeft = (props: Props) => {
  return (
    <svg
      width={props.size ? props.size.toString() : '8'}
      height={props.size ? ((props.size / 8) * 14).toString() : '14'}
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 13L1 7L7 1"
        stroke={props.color ? props.color : 'var(--light-200)'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
