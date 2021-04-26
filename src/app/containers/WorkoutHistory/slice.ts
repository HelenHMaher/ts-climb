import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { Workout } from '../AddWorkout/types';
import { ExerciseInWorkout } from '../EditExerciseInWorkout/types';

// The initial state of the WorkoutHistory container
export const initialState: ContainerState = {
  workouts: [],
  editWorkout: null,
  editExerciseInWorkout: null,
};

const workoutHistorySlice = createSlice({
  name: 'workoutHistory',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    fetchWorkoutsAction(state) {},
    fetchWorkoutsSuccess(state, action: PayloadAction<Array<Workout>>) {
      state.workouts = action.payload;
    },
    fetchWorkoutsFailure(state, action: PayloadAction<string>) {
      console.log(action.payload);
    },
    editWorkoutAction(state, action: PayloadAction<Workout | null>) {
      state.editWorkout = action.payload;
    },
    editExerciseInWorkoutAction(
      state,
      action: PayloadAction<ExerciseInWorkout | null>,
    ) {
      state.editExerciseInWorkout = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = workoutHistorySlice;
