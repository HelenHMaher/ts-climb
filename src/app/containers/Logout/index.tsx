/**
 *
 * Logout
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectErrorMessage, selectSuccessMessage } from './selectors';
import { logoutSaga } from './saga';

interface Props {}

export function Logout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: logoutSaga });

  const dispatch = useDispatch();
  const errorMessage = useSelector(selectErrorMessage);
  const successMessage = useSelector(selectSuccessMessage);

  const clickHandler = () => {
    dispatch(actions.logoutAction());
  };

  return (
    <>
      <Div onClick={clickHandler}>Logout</Div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <div>{successMessage}</div>
    </>
  );
}

const Div = styled.div`
  width: 100px;
  background: black;
  color: white;
`;

const ErrorMessage = styled.div`
  color: red;
`;
