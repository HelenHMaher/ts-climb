/**
 *
 * AddExercise
 *
 */

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Formik } from 'formik';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectErrorMessage, selectSuccessMessage } from './selectors';
import { addExerciseSaga } from './saga';
import { ExerciseType, Exercise } from './types';
import { translations } from 'locales/translations';

interface Props {}

export function AddExercise(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: addExerciseSaga });

  const errorMessage = useSelector(selectErrorMessage);
  const successMessage = useSelector(selectSuccessMessage);
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Div>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <SuccessMessage>{successMessage}</SuccessMessage>
        <Formik
          initialValues={{
            name: '',
            description: '',
            type: ExerciseType.CARDIO,
          }}
          onSubmit={(values: Exercise) => {
            dispatch(actions.addExerciseAction(values));
          }}
        >
          {({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="name">
                {t(translations.newExercise)}
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

              <Label htmlFor="description">
                {t(translations.exerciseDescription)}

                <Input
                  id="description"
                  name="description"
                  placeholder="push up from floor"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  type="text"
                />
              </Label>

              <Label htmlFor="type">
                {t(translations.exerciseType)}
                <Input
                  id="type"
                  name="type"
                  placeholder="STRENGTH"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}
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
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-family: 'Raleway', sans-serif;
  font-size: 0.8em;
  margin: 0.5em 0;
  position: relative;
`;
