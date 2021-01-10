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
        <h1>{t(translations.newExercise)}</h1>
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
          <Form>
            <label htmlFor="name">{t(translations.newExercise)}</label>
            <Field id="name" name="name" placeholder="push-up" />

            <label htmlFor="description">
              {t(translations.exerciseDescription)}
            </label>
            <Field
              id="description"
              name="description"
              placeholder="push up from floor"
            />

            <label htmlFor="type">{t(translations.exerciseType)}</label>
            <Field id="type" name="type" placeholder="STRENGTH" />

            <button type="submit">Submit</button>
          </Form>
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
