/**
 *
 * NavBar
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface Props {}

export function NavBar(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const navBarItems = [
    { name: 'Profile', url: '/dashboard/profile' },
    { name: 'Start Workout', url: '/dashboard' },
    { name: 'Exercise Creator', url: '/dashboard/exerciseCreator' },
  ];

  return (
    <FlexContainer>
      {navBarItems.map(item => (
        <StyledLink key={uuidv4()} to={item.url}>
          {item.name}
        </StyledLink>
      ))}
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100vw;
  height: 80px;
  flex-direction: row;
  align-content: stretch;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 10px;
  background: var(--main-200-50);
`;

const StyledLink = styled(Link)`
  width: 100px;
`;
