/* --- STATE --- */
export interface AddExerciseState {
  errorMessage: string | null;
  successMessage: string | null;
}

export interface Exercise {
  name: string;
  description: string;
  type: ExerciseType | '';
}

export enum ExerciseType {
  STRENGTH,
  CARDIO,
  BOULDER,
  SPORT,
}

export type ContainerState = AddExerciseState;
