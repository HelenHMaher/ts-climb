/**
 *
 * Profile
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { TopNav } from '../../components/TopNav';
import { Logout } from '../Logout';
import { Button } from '../../components/Button';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectCurrentUser, selectErrorMessage } from './selectors';
import { profileSaga } from './saga';

interface Props {}

export function Profile(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: profileSaga });

  const dispatch = useDispatch();
  const history = useHistory();
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
        <Info>
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
        </Info>
        <Button
          buttonStyle="solid"
          buttonSize="large"
          title="Workout History"
          clickHandler={() => history.push('/dashboard/workoutHistory')}
        />
      </Div>
    </>
  );
}

const Div = styled.div`
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  color: var(--aux-200);
`;

const Info = styled.div`
  margin: 20px;
`;
