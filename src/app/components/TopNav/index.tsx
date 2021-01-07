import * as React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ChevronLeft } from '../icons/ChevronLeft';

interface Props {
  back: boolean;
  leftButton: any;
  rightButton: any;
  title: string;
}

export const TopNav = (props: Props) => {
  const history = useHistory();

  const clickHandler = () => {
    history.goBack();
  };

  return (
    <StyledTopNav>
      {props.back ? (
        <div className="topNav__back" onClick={clickHandler}>
          <ChevronLeft size={12} />
        </div>
      ) : (
        <div className="topNav__left">{props.leftButton}</div>
      )}
      <div className="topNav_title">{props.title}</div>
      <div className="topNav__right">{props.rightButton}</div>
    </StyledTopNav>
  );
};

const StyledTopNav = styled.div`
  padding: 15px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
