/* --- STATE --- */
export interface EditExerciseInWorkoutState {
  errorMessage: string | null;
  successMessage: string | null;
}

export interface ExerciseInWorkout {
  id: string;
  instanceId: string;
  sets?: Array<string>;
  notes?: string;
}

export type ContainerState = EditExerciseInWorkoutState;
