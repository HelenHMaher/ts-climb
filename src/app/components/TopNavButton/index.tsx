/**
 *
 * TopNavButton
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

interface Props {
  link: string;
  label: string;
}

export function TopNavButton(props: Props) {
  return (
    <Link to={props.link}>
      <Div>{props.label}</Div>
    </Link>
  );
}

const Div = styled.div`
  padding: 8px 15px;
  background: var(--dark-100-50);
  border-radius: 20px;
  color: var(--light-100);
  cursor: pointer;
`;
