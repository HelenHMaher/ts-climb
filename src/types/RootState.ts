import { AddExerciseState } from 'app/containers/AddExercise/types';
import { ExercisesState } from 'app/containers/Exercises/types';
import { StartWorkoutState } from 'app/containers/StartWorkout/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  addExercise?: AddExerciseState;
  exercises?: ExercisesState;
  startWorkout?: StartWorkoutState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
