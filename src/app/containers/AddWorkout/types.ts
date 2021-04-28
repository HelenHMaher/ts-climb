/* --- STATE --- */
import { ExerciseInWorkout } from '../EditExerciseInWorkout/types';

export interface AddWorkoutState {
  errorMessage: string | null;
  successMessage: string | null;
}

export interface Workout {
  name: string;
  exercises: Array<ExerciseInWorkout>;
  notes: string;
  date: string;
  _id: string;
}

export type ContainerState = AddWorkoutState;
