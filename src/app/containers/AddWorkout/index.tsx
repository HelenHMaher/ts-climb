/**
 *
 * AddExercise
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Formik } from 'formik';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectErrorMessage, selectSuccessMessage } from './selectors';
import { addWorkoutSaga } from './saga';
import { Workout } from './types';

interface Props {}

export function AddWorkout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: addWorkoutSaga });

  const errorMessage = useSelector(selectErrorMessage);
  const successMessage = useSelector(selectSuccessMessage);
  const dispatch = useDispatch();

  const dummyData = [
    { name: 'push-up', description: 'push up from the ground', type: 1 },
    { name: 'sit-up', description: 'sit up from the ground', type: 1 },
    { name: 'pull-up', description: 'pull up to the bar', type: 1 },
    { name: 'squat', description: 'squat down to the ground', type: 1 },
  ];

  const exerciseOptions = dummyData.map(x => {
    return (
      <option key={x.name} value={x.name}>
        {x.name}
      </option>
    );
  });

  return (
    <>
      <Div>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <SuccessMessage>{successMessage}</SuccessMessage>
        <Formik
          initialValues={{
            date: '',
            name: '',
            exercises: [],
            notes: '',
          }}
          onSubmit={(values: Workout) => {
            dispatch(actions.addWorkoutAction(values));
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="date">
                <p>New Workout</p>
                <Input
                  id="date"
                  name="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  type="date"
                />
              </Label>

              <Label htmlFor="name">
                <p>Workout Name</p>
                <Input
                  id="name"
                  name="name"
                  placeholder="push-up"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  type="text"
                />
              </Label>

              <Label htmlFor="exercises">
                <p>Exercises</p>
                <Select
                  id="exercises"
                  name="exercises"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.exercises}
                >
                  <option value=""></option>
                  {exerciseOptions}
                </Select>
              </Label>

              <Label htmlFor="description">
                <p>Workout Notes</p>

                <Input
                  id="notes"
                  name="notes"
                  placeholder="push up from floor"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.notes}
                  type="text"
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

export const Select = styled.select`
  background: var(--light-100-25);
  width: 285px;
  height: 26px;
  border-radius: 10px;
  border-style: none;
  text-align: left;
  color: var(--dark-300);
  font-size: 16px;
  padding-left: 24px;
  :focus {
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
