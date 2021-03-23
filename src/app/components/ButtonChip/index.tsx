/**
 *
 * ButtonChip
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';

interface Props {
  clickHandler: () => void;
  text: string;
}

export function ButtonChip(props: Props) {
  return (
    <Div>
      <Button onClick={e => props.clickHandler()}>{props.text}</Button>
    </Div>
  );
}

const Div = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  font-size: 15px;
  background: var(--main-100);
  color: var(--light-100);
  font-weight: 400;
  border: 1px solid var(--light-100);
  border-radius: 5px;
`;
