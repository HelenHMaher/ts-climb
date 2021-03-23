import { Exercise } from '../AddExercise/types';

/* --- STATE --- */
export interface ExercisesState {
  exercises: Exercise[];
  editExercise: Exercise | null;
}

export type ContainerState = ExercisesState;
