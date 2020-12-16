/**
 *
 * ConstructionNotice
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { messages } from './messages';
import climbGear from '../../../climbGear.jpg';
import {
  ConstructionContainer,
  ConstructionBox,
  ConstructionImage,
  ConstructionContent,
  ConstructionText,
  ConstructionTitle,
  ButtonContainer,
  DemoButton,
  ConstructionClose,
  CloseContainer,
} from './StyledConstructionNotice';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectConstructionNotice } from './selectors';
import { constructionNoticeSaga } from './saga';

export interface Props {}

export function ConstructionNotice(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: constructionNoticeSaga });

  const dispatch = useDispatch();
  const display = useSelector(selectConstructionNotice).display;

  const closeHandler = () => {
    dispatch(actions.displayComponent());
  };

  return (
    <ConstructionContainer display={display}>
      <ConstructionBox>
        <ConstructionImage>
          <img src={climbGear} alt="My Daily Climb" />
        </ConstructionImage>
        <ConstructionContent>
          <CloseContainer>
            <ConstructionClose onClick={closeHandler}>
              <div>X</div>
            </ConstructionClose>
          </CloseContainer>
          <ConstructionTitle>Pardon this mess!</ConstructionTitle>
          <ConstructionText>
            My Daily Climb is being migrated to TypeScript. The original
            JavaScript project is no longer live, but feel free to look at the
            GitHub repositories for a peak at what's to come.
          </ConstructionText>
          <ButtonContainer>
            <DemoButton
              href="https://github.com/HelenHMaher/ts-climb"
              target="_blank"
            >
              TS Repo
            </DemoButton>
            <DemoButton
              href="https://github.com/HelenHMaher/daily-climb-redux"
              target="_blank"
            >
              JS Repo
            </DemoButton>
          </ButtonContainer>
        </ConstructionContent>
      </ConstructionBox>
    </ConstructionContainer>
  );
}
