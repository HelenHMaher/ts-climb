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
        <ButtonLeft onClick={clickHandler}>
          <Back>
            <ChevronLeft size={10} color={null} />
          </Back>
        </ButtonLeft>
      ) : (
        <ButtonLeft>{props.leftButton}</ButtonLeft>
      )}
      <Title className="topNav_title">{props.title}</Title>
      <ButtonRight>{props.rightButton}</ButtonRight>
    </StyledTopNav>
  );
};

const StyledTopNav = styled.div`
  position: absolute;
  top: 0px;
  padding: 10px;
  width: 100vw;
  background: var(--main-200-50);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const ButtonLeft = styled.div`
  width: 100px;
  display: flex;
  justify-content: flex-start;
`;

const ButtonRight = styled.div`
  width: 100px;
  display: flex;
  justify-content: flex-end;
`;

const Back = styled.div`
  width: 40px;
  height: 40px;
  background: var(--dark-100-50);
  border-radius: 20px;
  color: var(--light-100);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
