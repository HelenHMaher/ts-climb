import { Exercise } from '../AddExercise/types';

/* --- STATE --- */
export interface ExercisesState {
  exercises: Array<Exercise> | [];
}

export type ContainerState = ExercisesState;
