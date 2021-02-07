/* --- STATE --- */
import { Exercise } from '../AddExercise/types';

export interface AddWorkoutState {
  errorMessage: string | null;
  successMessage: string | null;
}

export interface Workout {
  name: string;
  exercises: Array<Exercise>;
  notes: string;
  date: Date | null;
}

export type ContainerState = AddWorkoutState;
