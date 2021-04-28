/* --- STATE --- */
import { Workout } from '../AddWorkout/types';
import { ExerciseInWorkout } from '../EditExerciseInWorkout/types';

export interface WorkoutHistoryState {
  workouts: Workout[];
  editWorkout: Workout | null;
  editExerciseInWorkout: ExerciseInWorkout | null;
}

export type ContainerState = WorkoutHistoryState;
