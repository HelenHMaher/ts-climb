/**
 *
 * Login
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Formik, Field, Form } from 'formik';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectErrorMessage } from './selectors';
import { loginSaga } from './saga';
import { User } from './types';

interface Props {}

export function Login(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  return (
    <>
      <Div>
        <h1>My Daily Climb</h1>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values: User) => {
            dispatch(actions.loginAction(values));
          }}
        >
          <Form>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" placeholder="username" />
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="password" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Div>
    </>
  );
}

const Div = styled.div``;

const ErrorMessage = styled.div`
  color: red;
`;
