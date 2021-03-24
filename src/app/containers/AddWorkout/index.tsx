/**
 *
 * AddExercise
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Formik, Field } from 'formik';
import { useHistory } from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectErrorMessage, selectSuccessMessage } from './selectors';
import { selectExercises } from '../Exercises/selectors';
import { addWorkoutSaga } from './saga';
import { Workout } from './types';

interface Props {}

export function AddWorkout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: addWorkoutSaga });

  const [editDate, setEditDate] = React.useState(false);

  const errorMessage = useSelector(selectErrorMessage);
  const successMessage = useSelector(selectSuccessMessage);
  const dispatch = useDispatch();
  const history = useHistory();

  const exercises = useSelector(selectExercises);

  const exerciseOptions = exercises.map(x => {
    return (
      <ExerciseFieldLabel key={x.name}>
        <Field
          className="exerciseField"
          type="checkbox"
          name="exercises"
          value={x.name}
        />
        {x.name}
      </ExerciseFieldLabel>
    );
  });

  return (
    <>
      <Div>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <SuccessMessage>{successMessage}</SuccessMessage>
        <Formik
          initialValues={{
            name: '',
            date: new Date().toISOString().substring(0, 10),
            exercises: [],
            notes: '',
          }}
          onSubmit={(values: Workout) => {
            alert(JSON.stringify(values, null, 2));
            dispatch(actions.addWorkoutAction(values));
            setTimeout(() => {
              history.push('/dashboard/workoutHistory');
            }, 400);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="name">
                <p>New Workout</p>
                <Input
                  id="name"
                  name="name"
                  placeholder="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  type="text"
                />
              </Label>

              <Label htmlFor="date">
                <DateLabel>
                  <p>Date</p>
                  <EditDate onClick={() => setEditDate(!editDate)}>
                    {editDate ? 'Save' : 'Edit'}
                  </EditDate>
                </DateLabel>
                {editDate ? (
                  <Input
                    id="date"
                    name="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                    type="date"
                  />
                ) : (
                  <DateValue>{values.date}</DateValue>
                )}
              </Label>

              <ExercisesLabel id="exercise-group">Exercises</ExercisesLabel>
              <ExercisesGroup role="group" aria-labelledby="exercise-group">
                {exerciseOptions}
              </ExercisesGroup>

              <Label htmlFor="description">
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

              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </Div>
    </>
  );
}

const Div = styled.div`
  border-radius: 20px;
  padding: 10px 15px;
  background: var(--aux-100);
`;

const ErrorMessage = styled.div`
  background: var(--aux-200);
  color: var(--light-100);
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
`;

const SuccessMessage = styled.div``;

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  background: var(--light-100-25);
  width: 285px;
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

export const Button = styled.button`
  margin: 20px 0px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  border-radius: 12px;
  padding: 10px;
  border: 2px solid var(--main-200);
  width: 285px;
  background: var(--main-200);
  font-size: 1.2rem;
  color: var(--light-200);
  cursor: pointer;
`;

const Label = styled.label`
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
const DateLabel = styled.div`
  width: 285px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const EditDate = styled.div`
  background: var(--light-100-25);
  padding: 0px 15px;
  border-radius: 10px;
  border: 1px solid var(--main-200);
  margin-left: 30px;
`;

const DateValue = styled.div`
  background: var(--light-100-25);
  padding: 0px 15px;
  border-radius: 10px;
`;

const ExercisesLabel = styled.div`
  color: var(--main-200);
  width: 285px;
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

const ExercisesGroup = styled.div`
  display: inline-block;
  width: 285px;
  background: var(--light-100-25);
  border-radius: 10px;
`;

const ExerciseFieldLabel = styled.label`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  color: var(--main-200);
  display: inline-block;
  padding: 10px;
  .exerciseField {
    margin: 5px;
  }
`;
