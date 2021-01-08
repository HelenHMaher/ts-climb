/**
 *
 * Button
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  buttonSize: string;
  buttonStyle: string;
  clickHandler:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined;
  title: string;
}

export function Button(props: Props) {
  return (
    <Div
      btnStyle={props.buttonStyle}
      btnSize={props.buttonSize}
      onClick={props.clickHandler}
    >
      {props.title}
    </Div>
  );
}

const Div = styled.div<{ btnStyle: string; btnSize: string }>`
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  border-radius: 12px;
  cursor: pointer;

  background: ${props =>
    props.btnStyle === 'solid'
      ? 'var(--light-100-25)'
      : props.btnStyle === 'sec_solid'
      ? 'var(--aux-100)'
      : 'transparent'};
  color: ${props =>
    props.btnStyle === 'outline'
      ? 'var(--light-200)'
      : props.btnStyle === 'sec_outline'
      ? 'var(--aux-100)'
      : 'var(--main-200)'};

  border: ${props =>
    props.btnStyle === 'solid'
      ? '2px solid var(--main-200)'
      : props.btnStyle === 'outline'
      ? '2px solid var(--light-200)'
      : props.btnStyle === 'sec_outline'
      ? '2px solid var(--aux-100)'
      : 'none'};
  padding: ${props =>
    props.btnSize === 'medium'
      ? '12px 24px'
      : props.btnSize === 'wide'
      ? '10px'
      : '16px 32px'};

  font-size: ${props => (props.btnSize === 'large' ? '1.5rem' : '1.2rem')};
  width: ${props => (props.btnSize === 'wide' ? '285px' : null)};

  transition: transform 0.3s ease;
  :hover {
    transform: scale(1.1);
  }
`;
