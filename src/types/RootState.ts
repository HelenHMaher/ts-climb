import { AddExerciseState } from 'app/containers/AddExercise/types';
import { ConstructionNoticeState } from 'app/containers/ConstructionNotice/types';
import { ExercisesState } from 'app/containers/Exercises/types';
import { StartWorkoutState } from 'app/containers/StartWorkout/types';
import { LoginState } from 'app/containers/Login/types';
import { RegisterState } from 'app/containers/Register/types';
import { LogoutState } from 'app/containers/Logout/types';
import { ProfileState } from 'app/containers/Profile/types';
import { WorkoutHistoryState } from 'app/containers/WorkoutHistory/types';
import { AddWorkoutState } from 'app/containers/AddWorkout/types';
import { EditExerciseState } from 'app/containers/EditExercise/types';
import { EditWorkoutState } from 'app/containers/EditWorkout/types';
import { EditExerciseInWorkoutState } from 'app/containers/EditExerciseInWorkout/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  addExercise?: AddExerciseState;
  exercises?: ExercisesState;
  startWorkout?: StartWorkoutState;
  constructionNotice?: ConstructionNoticeState;
  login?: LoginState;
  register?: RegisterState;
  logout?: LogoutState;
  profile?: ProfileState;
  workoutHistory?: WorkoutHistoryState;
  addWorkout?: AddWorkoutState;
  editExercise?: EditExerciseState;
  editWorkout?: EditWorkoutState;
  editExerciseInWorkout?: EditExerciseInWorkoutState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
