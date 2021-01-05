/**
 *
 * Register
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { InputField } from '../../components/InputField';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import {
  selectErrorMessage,
  selectSuccessMessage,
  selectNewUserInfo,
} from './selectors';
import { registerSaga } from './saga';

interface Props {}

export function Register(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: registerSaga });

  const errorMessage = useSelector(selectErrorMessage);
  const successMessage = useSelector(selectSuccessMessage);
  const newUserInfo = useSelector(selectNewUserInfo);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(actions.registerAction(newUserInfo));
  };

  return (
    <>
      <Div>
        <h1>Register</h1>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <div>{successMessage}</div>
        <InputField
          onChange={e => dispatch(actions.usernameAction(e.target.value))}
          value={newUserInfo.username}
          type="string"
          placeholder="Username"
          msg={{ err: false, msg: '' }}
        />
        <InputField
          onChange={e => dispatch(actions.passwordAction(e.target.value))}
          value={newUserInfo.password}
          type="password"
          placeholder="Password"
          msg={{ err: false, msg: '' }}
        />
        <InputField
          onChange={e => dispatch(actions.confPasswordAction(e.target.value))}
          value={newUserInfo.confPassword}
          type="password"
          placeholder="Confirm Password"
          msg={{ err: false, msg: '' }}
        />
        <InputField
          onChange={e => dispatch(actions.emailAction(e.target.value))}
          value={newUserInfo.email}
          type="string"
          placeholder="E-Mail"
          msg={{ err: false, msg: '' }}
        />
        <div onClick={clickHandler}>Submit</div>
      </Div>
    </>
  );
}

const Div = styled.div``;

const ErrorMessage = styled.div`
  color: red;
`;
