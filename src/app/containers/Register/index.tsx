/**
 *
 * Register
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { InputField } from '../../components/InputField';
import { TopNav } from '../../components/TopNav';
import { TopNavButton } from '../../components/TopNavButton';
import { Button } from '../../components/Button';

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

  const canSubmit =
    newUserInfo.username.length > 1 &&
    newUserInfo.password.length > 1 &&
    newUserInfo.email.length > 1 &&
    newUserInfo.password === newUserInfo.confPassword;

  const clickHandler = () => {
    if (canSubmit) {
      dispatch(actions.registerAction(newUserInfo));
    } else {
      dispatch(actions.registerFailureAction('all feilds are required'));
    }
  };

  return (
    <>
      <Div>
        <TopNav
          back={true}
          title="Register"
          leftButton={null}
          rightButton={<TopNavButton link="/" label="to Login" />}
        />
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
          msg={
            newUserInfo.password === newUserInfo.confPassword
              ? {
                  err: false,
                  msg: '',
                }
              : { err: true, msg: 'passwords must match' }
          }
        />
        <InputField
          onChange={e => dispatch(actions.emailAction(e.target.value))}
          value={newUserInfo.email}
          type="string"
          placeholder="E-Mail"
          msg={{ err: false, msg: '' }}
        />
        <Button
          clickHandler={clickHandler}
          buttonSize="wide"
          buttonStyle="solid"
          title="Submit"
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <div>{successMessage}</div>
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
  margin-top: 5px;
  color: var(--aux-200);
`;
