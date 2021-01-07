/**
 *
 * Profile
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { TopNav } from '../../components/TopNav';
import { Logout } from '../Logout';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectCurrentUser, selectErrorMessage } from './selectors';
import { profileSaga } from './saga';

interface Props {}

export function Profile(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: profileSaga });

  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const errorMessage = useSelector(selectErrorMessage);

  React.useEffect(() => {
    dispatch(actions.profileAction());
  }, [dispatch]);

  return (
    <>
      <Div>
        <TopNav
          back={true}
          title="Profile"
          leftButton={null}
          rightButton={<Logout />}
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
      </Div>
    </>
  );
}

const Div = styled.div``;

const ErrorMessage = styled.div`
  color: red;
`;
