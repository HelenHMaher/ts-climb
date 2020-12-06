/* --- STATE --- */
export interface AddExerciseState {
  errorMessage: string | null;
}

export interface Exercise {
  exerciseName: string;
  exerciseDescription: string;
  exerciseType: ExerciseType;
}

export enum ExerciseType {
  STRENGTH,
  CARDIO,
  BOULDER,
  SPORT,
}

export type ContainerState = AddExerciseState;
