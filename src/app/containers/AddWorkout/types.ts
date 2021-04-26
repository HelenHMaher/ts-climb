/* --- STATE --- */

export interface AddWorkoutState {
  errorMessage: string | null;
  successMessage: string | null;
}

export interface Workout {
  name: string;
  exercises: Array<{ id: string; sets?: Array<string>; notes?: string }> | [];
  notes: string;
  date: string;
  _id?: string;
}

export type ContainerState = AddWorkoutState;
