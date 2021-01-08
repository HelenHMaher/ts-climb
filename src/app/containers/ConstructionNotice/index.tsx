/**
 *
 * ConstructionNotice
 *
 */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
import { actions as loginActions } from '../Login/slice';
import { selectSuccessMessage as selectLoginSuccessMessage } from '../Login/selectors';
import { selectConstructionNotice } from './selectors';
import { constructionNoticeSaga } from './saga';

export interface Props {}

export function ConstructionNotice(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: constructionNoticeSaga });

  const dispatch = useDispatch();
  const history = useHistory();
  const display = useSelector(selectConstructionNotice);
  const successMessage = useSelector(selectLoginSuccessMessage);

  const closeHandler = () => {
    dispatch(actions.displayComponent());
  };

  const clickHandler = () => {
    dispatch(
      loginActions.loginAction({ username: 'Admin', password: 'password' }),
    );
  };

  React.useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      history.replace('/dashboard');
    }
  }, [history, successMessage]);

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
            My Daily Climb is still under construction but feel free to register
            or take a look around using the demo account.
          </ConstructionText>
          <ButtonContainer>
            <DemoButton onClick={clickHandler}>Demo Account</DemoButton>
            <DemoButton>
              <a
                href="https://github.com/HelenHMaher/ts-climb"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Repo
              </a>
            </DemoButton>
          </ButtonContainer>
        </ConstructionContent>
      </ConstructionBox>
    </ConstructionContainer>
  );
}
