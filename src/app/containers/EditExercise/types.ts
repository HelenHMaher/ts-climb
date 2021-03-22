/* --- STATE --- */
export interface EditExerciseState {
  errorMessage: string | null;
  successMessage: string | null;
  editDisplay: 'true' | 'false';
}

export type ContainerState = EditExerciseState;
