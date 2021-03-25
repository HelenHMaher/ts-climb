/**
 *
 * NavBar
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Ram } from '../icons/Ram';
import { Mountain } from '../icons/Mountain';
import { WeightIcon } from '../icons/WeightIcon';

interface Props {}

export function NavBar(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <FlexContainer>
      <StyledLink to="/dashboard/profile">
        <Ram size="small" color="var(--light-100)" />
      </StyledLink>
      <StyledLink to="/dashboard">
        <Mountain color="var(--light-100)" size="small" />
      </StyledLink>
      <StyledLink to="/dashboard/exerciseList">
        <WeightIcon color="var(--light-100)" size="small" />
      </StyledLink>
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  z-index: 5;
  position: fixed;
  bottom: 0px;
  display: flex;
  width: 100vw;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 10px;
  background: var(--main-200-75);
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 90px;
`;
