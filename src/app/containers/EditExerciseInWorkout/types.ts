/* --- STATE --- */
export interface EditExerciseInWorkoutState {}

export interface ExerciseInWorkout {
  id: string;
  instanceId: string;
  sets?: Array<string>;
  notes?: string;
}

export type ContainerState = EditExerciseInWorkoutState;
