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
      <Div>
        <Button onClick={clickHandler}>Logout</Button>
        <Message>
          {errorMessage}
          {successMessage}
        </Message>
      </Div>
    </>
  );
}

const Button = styled.div`
  padding: 8px 15px;
  background: var(--dark-100-50);
  border-radius: 20px;
  color: var(--light-100);
  cursor: pointer;
`;

const Div = styled.div``;

const Message = styled.div`
  font-size: 8px;
`;
