/**
 *
 * EditExerciseInWorkout
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import {
  selectExerciseInWorkoutToEdit,
  selectWorkoutToEdit,
} from '../WorkoutHistory/selectors';
import { selectExercises } from '../Exercises/selectors';
import { ExerciseType } from '../AddExercise/types';
import { editExerciseInWorkoutSaga } from './saga';
import { ExerciseInWorkout } from './types';
import { Trash } from '../../components/icons/Trash';

interface Props {}

export function EditExerciseInWorkout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editExerciseInWorkoutSaga });

  const exerciseInWorkoutToEdit = useSelector(selectExerciseInWorkoutToEdit);
  const workout = useSelector(selectWorkoutToEdit);
  const exercise = useSelector(selectExercises).find(
    x => exerciseInWorkoutToEdit?.id === x._id,
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const history = useHistory();

  const workoutInfo =
    workout != null ? (
      <WorkoutInfo>
        <SectionTitle>Workout</SectionTitle>
        <SectionInfo>
          <div>{workout.name}</div>
          <div>{workout.date}</div>
        </SectionInfo>
      </WorkoutInfo>
    ) : (
      <></>
    );

  const exerciseInfo =
    exercise != null ? (
      <ExerciseInfo>
        <SectionTitle>Exercise</SectionTitle>
        <SectionInfo>
          <div>{exercise.name}</div>
          <div>{exercise.description}</div>
          <div>{ExerciseType[exercise.type]}</div>
        </SectionInfo>
      </ExerciseInfo>
    ) : (
      <></>
    );

  // const exerciseInstanceInfo =
  //   exerciseInWorkoutToEdit != null ? (
  //     <ExerciseInstanceInfo>
  //       <div>id: {exerciseInWorkoutToEdit.id}</div>
  //       <div>instanceId: {exerciseInWorkoutToEdit.instanceId}</div>
  //       {exerciseInWorkoutToEdit.sets ? (
  //         <div>
  //           sets:
  //           <ol>
  //             {exerciseInWorkoutToEdit.sets.map(x => (
  //               <li>{x}</li>
  //             ))}
  //           </ol>
  //         </div>
  //       ) : (
  //         <></>
  //       )}
  //       {exerciseInWorkoutToEdit.notes ? (
  //         <div>notes: {exerciseInWorkoutToEdit.notes}</div>
  //       ) : (
  //         <></>
  //       )}
  //     </ExerciseInstanceInfo>
  //   ) : (
  //     <></>
  //   );

  return (
    <>
      <StyledEditExerciseInWorkout>
        {workoutInfo}
        {exerciseInfo}
        {/* {exerciseInstanceInfo} */}

        <Formik
          initialValues={{
            sets: exerciseInWorkoutToEdit?.sets || [],
            notes: exerciseInWorkoutToEdit?.notes || '',
            id: exerciseInWorkoutToEdit?.id || '',
            instanceId: exerciseInWorkoutToEdit?.instanceId || '',
          }}
          onSubmit={(values: ExerciseInWorkout) => {
            if (workout && exerciseInWorkoutToEdit) {
              alert(JSON.stringify(values, null, 2));
              dispatch(
                actions.editExerciseInWorkoutAction({
                  workoutId: workout._id,
                  exerciseInstanceId: exerciseInWorkoutToEdit.instanceId,
                  exercise: values,
                }),
              );
              setTimeout(() => {
                history.push('/dashboard/workoutHistory');
              }, 400);
            }
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="sets">
                <SectionTitle>Sets</SectionTitle>
                <FieldArray name="sets">
                  {({ insert, remove, push }) => (
                    <EditSets>
                      {values.sets.length > 0 &&
                        values.sets.map((set, index) => (
                          <Set>
                            <SubLabel htmlFor={`sets[${index}]`}>
                              {index + 1}
                            </SubLabel>
                            <StyledField>
                              <Field name={`sets[${index}]`} type="text" />
                            </StyledField>
                            <TrashButton
                              type="button"
                              onClick={() => remove(index)}
                            >
                              <Trash size={null} color={null} />
                            </TrashButton>
                            <ErrorMessage
                              name={`sets[${index}]`}
                              component="div"
                              className="field-error"
                            />
                          </Set>
                        ))}
                      <AddSetButton onClick={() => push('')}>
                        Add Set
                      </AddSetButton>
                    </EditSets>
                  )}
                </FieldArray>
              </Label>
              <Label htmlFor="notes">
                <p>Workout Notes</p>

                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="notes..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.notes}
                />
              </Label>

              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
          )}
        </Formik>
      </StyledEditExerciseInWorkout>
    </>
  );
}

const StyledEditExerciseInWorkout = styled.div`
  display: 'flex';
  border-radius: 20px;
  padding: 10px 15px;
  background: var(--aux-100);
  color: var(--main-200);
`;

const SectionTitle = styled.div`
  width: 150px;
  font-size: 30px;
`;

const SectionInfo = styled.div`
  padding: 5px 0;
`;

const WorkoutInfo = styled.div`
  display: flex;
  text-align: left;
  border-bottom: 1px solid var(--main-200);
`;

const ExerciseInfo = styled.div`
  display: flex;
  text-align: left;
  border-bottom: 1px solid var(--main-200);
`;

// const ExerciseInstanceInfo = styled.div`
//   text-align: left;
//   border-bottom: 1px solid var(--main-200);
// `;

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  width: 285px;
  color: var(--main-200);
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  font-size: 1em;
  margin: 0.5em 0;
  position: relative;
  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  }
`;

const SubLabel = styled.label`
  margin-right: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

const EditSets = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  margin-top: 10px;
`;

const TrashButton = styled.button`
  display: flex;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: var(--main-200-50);
`;

const SubmitButton = styled.button`
  margin: 10px 0px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  border-radius: 12px;
  padding: 12px;
  border: 2px solid var(--main-200);
  background: var(--main-200);
  font-size: 1.2rem;
  width: 100%;
  color: var(--light-200);
  cursor: pointer;
  transition: transform 0.3s ease;
  :hover {
    transform: scale(1.1);
  }
`;

const Textarea = styled.textarea`
  background: var(--light-100-25);
  width: 285px;
  height: 200px;
  border-radius: 10px;
  border-style: none;
  text-align: left;
  padding: 14px 24px;
  color: var(--dark-300);
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  ::placeholder {
    color: var(--main-200);
    size: 15px;
  }
  :focus {
    background: var(--main-200-50);
    outline: none;
  }
`;

const StyledField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--main-200);
  width: 215px;
  height: 26px;
  border-radius: 10px;
  border-style: none;
  text-align: left;
  padding: 14px 24px;
  color: var(--dark-300);
  font-size: 16px;
  ::placeholder {
    color: var(--main-200);
    size: 15px;
  }
  :focus {
    background: var(--main-200-50);
    outline: none;
  }
`;

const Set = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 285px;
`;

const AddSetButton = styled.div`
  background: var(--light-100-25);
  margin-left: 25px;
  width: 75px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid var(--main-200);
`;
