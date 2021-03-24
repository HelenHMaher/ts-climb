/* --- STATE --- */

export interface AddWorkoutState {
  errorMessage: string | null;
  successMessage: string | null;
}

export interface Workout {
  name: string;
  exercises: Array<string>;
  notes: string;
  date: string;
  _id?: string;
}

export type ContainerState = AddWorkoutState;
