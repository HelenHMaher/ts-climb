/**
 *
 * Login
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import { TopNav } from '../../components/TopNav';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import {
  selectErrorMessage,
  selectSuccessMessage,
  selectUserInfo,
} from './selectors';
import { loginSaga } from './saga';
import { useHistory, Link } from 'react-router-dom';

interface Props {}

export function Login(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  const errorMessage = useSelector(selectErrorMessage);
  const successMessage = useSelector(selectSuccessMessage);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const history = useHistory();

  const clickHandler = () => {
    dispatch(actions.loginAction(userInfo));
  };

  React.useEffect(() => {
    if (localStorage.getItem('isAuthenticated') === 'true') {
      history.replace('/dashboard');
    }
  }, [history, userInfo]);

  return (
    <>
      <Div>
        <TopNav
          back={false}
          leftButton={null}
          rightButton={null}
          title="My Daily Climb"
        />

        <div>{successMessage}</div>
        <InputField
          onChange={e => dispatch(actions.usernameAction(e.target.value))}
          value={userInfo.username}
          type="string"
          placeholder="username"
          msg={{ err: false, msg: '' }}
        />
        <InputField
          onChange={e => dispatch(actions.passwordAction(e.target.value))}
          value={userInfo.password}
          type="password"
          placeholder="password"
          msg={{ err: false, msg: '' }}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <Button
          buttonSize="wide"
          buttonStyle="solid"
          title="Submit"
          clickHandler={clickHandler}
        />
        <Link to="/register">
          <Button
            buttonSize="wide"
            buttonStyle="stealth"
            clickHandler={undefined}
            title="new user"
          />
        </Link>
      </Div>
    </>
  );
}

const Div = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.div`
  height: 16px;
  color: var(--aux-200);
  margin-bottom: 15px;
`;
