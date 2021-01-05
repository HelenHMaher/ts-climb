/**
 *
 * Login
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { InputField } from '../../components/InputField';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectErrorMessage, selectUserInfo } from './selectors';
import { loginSaga } from './saga';
import { useHistory, Link } from 'react-router-dom';

interface Props {}

export function Login(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  const errorMessage = useSelector(selectErrorMessage);
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
  });

  return (
    <>
      <Div>
        <h1>My Daily Climb</h1>
        <ErrorMessage>{errorMessage}</ErrorMessage>
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
        <div onClick={clickHandler}>Submit</div>
        <Link to="/register">new user</Link>
      </Div>
    </>
  );
}

const Div = styled.div``;

const ErrorMessage = styled.div`
  color: red;
`;