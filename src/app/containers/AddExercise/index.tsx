/**
 *
 * AddExercise
 *
 */

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Formik, Field, Form } from 'formik';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectErrorMessage } from './selectors';
import { addExerciseSaga } from './saga';
import { ExerciseType, Exercise } from './types';
import { translations } from 'locales/translations';

interface Props {}

export function AddExercise(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: addExerciseSaga });

  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Div>
        <h1>{t(translations.newExercise)}</h1>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <Formik
          initialValues={{
            exerciseName: '',
            exerciseDescription: '',
            exerciseType: ExerciseType.CARDIO,
          }}
          onSubmit={(values: Exercise) => {
            dispatch(actions.addExerciseAction(values));
          }}
        >
          <Form>
            <label htmlFor="exerciseName">{t(translations.newExercise)}</label>
            <Field
              id="exerciseName"
              name="exerciseName"
              placeholder="push-up"
            />

            <label htmlFor="exerciseDescription">
              {t(translations.exerciseDescription)}
            </label>
            <Field
              id="exerciseDescription"
              name="exerciseDescription"
              placeholder="push up from floor"
            />

            <label htmlFor="exerciseType">{t(translations.exerciseType)}</label>
            <Field
              id="exerciseType"
              name="exerciseType"
              placeholder="STRENGTH"
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Div>
    </>
  );
}

const Div = styled.div`
  background: yellow;
`;

const ErrorMessage = styled.div`
  background: red;
  color: white;
  font-family: 'Comic Sans MS', 'Comic Sans', cursive;
`;
