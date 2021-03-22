import * as React from 'react';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import * as selectors from '../selectors';
import { configureAppStore } from 'store/configureStore';
import { initialState, actions } from '../slice';
import { Exercise } from 'app/containers/AddExercise/types';
import { Exercises } from '../index';

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <Exercises />
    </Provider>,
  );

describe('<Exercises />', () => {
  let store: ReturnType<typeof configureAppStore>;
  let component: ReturnType<typeof renderComponent>;

  beforeEach(() => {
    store = configureAppStore();
    component = renderComponent(store);
  });

  it('should select exercises (empty array when using intitalState)', () => {
    const state = { exercises: { exercises: [], editExercise: null } };

    expect(selectors.selectExercises(state)).toEqual(initialState.exercises);
  });

  it('Tests that after a fetchExercisesSuccess action is dispatched the state changes and the component renders correctly', () => {
    const exercises: Array<Exercise> = [
      {
        name: 'pull-up',
        description: 'You pull yourself up',
        type: 1,
        workouts: [],
      },
      {
        name: 'push-up',
        description: 'You push yourself up',
        type: 1,
        workouts: [],
      },
      {
        name: 'sit-up',
        description: 'You sit yourself up',
        type: 1,
        workouts: [],
      },
    ];

    store.dispatch(actions.fetchExercisesSuccess(exercises));
    expect(store.getState().exercises.exercises).toEqual(exercises);
    // component.debug();
    expect(component.getByText('push-up')).toBeInTheDocument();
    expect(component.getByText('You push yourself up')).toBeInTheDocument();
  });
});
