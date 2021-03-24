import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import {
  reducer as exerciseReducer,
  sliceKey as exerciseSliceKey,
  actions as exerciseActions,
} from '../Exercises/slice';
import { exercisesWatcher } from '../Exercises/saga';

interface Props {}

export function DashboardInjector(props: Props) {
  useInjectReducer({ key: exerciseSliceKey, reducer: exerciseReducer });
  useInjectSaga({ key: exerciseSliceKey, saga: exercisesWatcher });

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(exerciseActions.fetchExercisesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}
