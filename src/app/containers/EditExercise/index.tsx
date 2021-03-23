/**
 *
 * EditExercise
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import {
  selectErrorMessage,
  selectSuccessMessage,
  selectEditDisplay,
} from './selectors';
import { actions as exerciseActions } from '../Exercises/slice';
import { selectExerciseToEdit } from '../Exercises/selectors';
import { editExerciseSaga } from './saga';
import { ExerciseType, Exercise } from '../AddExercise/types';

interface Props {}

export function EditExercise(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editExerciseSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const exerciseToEdit = useSelector(selectExerciseToEdit);
  const display = useSelector(selectEditDisplay);
  const errorMessage = useSelector(selectErrorMessage);
  const successMessage = useSelector(selectSuccessMessage);
  const dispatch = useDispatch();
  const history = useHistory();

  const clickCancel = () => {
    dispatch(exerciseActions.editExerciseAction(null));
    history.push('/dashboard/exerciseCreator');
  };
  const clickDelete = () => {
    if (exerciseToEdit) {
      dispatch(actions.deleteExerciseAction(exerciseToEdit));
      dispatch(exerciseActions.editExerciseAction(null));
      dispatch(exerciseActions.fetchExercisesAction());
      history.push('/dashboard/exerciseCreator');
    }
  };

  const exerciseTypes = [0, 1, 2, 3];
  const typeOptions = exerciseTypes.map(x => {
    return (
      <option key={x} value={x}>
        {ExerciseType[x]}
      </option>
    );
  });

  return (
    <>
      <Div display={display}>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <SuccessMessage>{successMessage}</SuccessMessage>
        <Formik
          initialValues={{
            name: exerciseToEdit?.name || '',
            description: exerciseToEdit?.description || '',
            type: exerciseToEdit?.type || '',
            workouts: exerciseToEdit?.workouts || [],
            _id: exerciseToEdit?._id || '',
          }}
          onSubmit={async (values: Exercise) => {
            alert(JSON.stringify(values, null, 2));
            try {
              await dispatch(actions.editExerciseAction(values));
              dispatch(exerciseActions.fetchExercisesAction());
              history.push('/dashboard/exerciseCreator');
            } catch {
              console.log('there was a problem!');
            }
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="name">
                <p>Name</p>
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

              <Label htmlFor="description">
                <p>Description</p>

                <Input
                  id="description"
                  name="description"
                  placeholder="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  type="text"
                />
              </Label>

              <Label htmlFor="type">
                <p>Type</p>
                <Select
                  id="type"
                  name="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}
                >
                  <option value=""></option>
                  {typeOptions}
                </Select>
              </Label>

              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
        <Cancel cancel onClick={() => clickCancel()}>
          Cancel
        </Cancel>
        <Cancel cancel={false} onClick={() => clickDelete()}>
          Delete
        </Cancel>
      </Div>
    </>
  );
}

const Div = styled.div<{ display: string }>`
  display: 'flex';
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

const Cancel = styled.button<{ cancel: boolean }>``;

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
