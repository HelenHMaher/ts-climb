/* --- STATE --- */
import { Workout } from '../AddWorkout/types';

export interface WorkoutHistoryState {
  workouts: Workout[];
  editWorkout: Workout | null;
}

export type ContainerState = WorkoutHistoryState;
