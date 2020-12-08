/**
 *
 * NavBar
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { messages } from './messages';

interface Props {}

export function NavBar(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const navBarItems = [
    { name: 'Exercises', url: '/exercises' },
    { name: 'Add Exercise', url: '/addExercise' },
    { name: 'Profile', url: '/profile' },
    { name: 'Workout History', url: '/history' },
  ];

  return (
    <FlexContainer>
      {navBarItems.map(item => (
        <StyledLink to={item.url}>{item.name}</StyledLink>
      ))}
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: row;
  align-content: stretch;
  justify-content: space-around;
  flex-wrap: nowrap;
`;

const StyledLink = styled(Link)``;
