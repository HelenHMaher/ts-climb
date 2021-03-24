/* --- STATE --- */
import { Workout } from '../AddWorkout/types';

export interface WorkoutHistoryState {
  workouts: Workout[];
}

export type ContainerState = WorkoutHistoryState;
