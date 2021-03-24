/**
 *
 * EditWorkout
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { actions as workoutHistoryActions } from '../WorkoutHistory/slice';
import { selectWorkoutToEdit } from '../WorkoutHistory/selectors';
import { editWorkoutSaga } from './saga';

import { Workout } from '../AddWorkout/types';
import { Button } from '../../components/Button';
import { Trash } from '../../components/icons/Trash';

interface Props {}

export function EditWorkout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editWorkoutSaga });

  const [editDate, setEditDate] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const workoutToEdit = useSelector(selectWorkoutToEdit);

  const clickCancel = () => {
    dispatch(workoutHistoryActions.editWorkoutAction(null));
    history.push('/dashboard/workoutHistory');
  };
  const clickDelete = () => {
    if (workoutToEdit) {
      dispatch(actions.deleteWorkoutAction(workoutToEdit));
      dispatch(workoutHistoryActions.editWorkoutAction(null));
      setTimeout(() => {
        history.push('/dashboard/workoutHistory');
      }, 400);
    }
  };

  return (
    <>
      <Div>
        <TrashButton onClick={() => clickDelete()}>
          <Trash size="large" color={null} />
        </TrashButton>

        <Formik
          initialValues={{
            name: workoutToEdit?.name || '',
            date: workoutToEdit?.date || '',
            notes: workoutToEdit?.notes || '',
            exercises: workoutToEdit?.exercises || [],
            _id: workoutToEdit?._id || '',
          }}
          onSubmit={(values: Workout) => {
            alert(JSON.stringify(values, null, 2));
            dispatch(actions.editWorkoutAction(values));
            setTimeout(() => {
              history.push('/dashboard/workoutHistory');
            }, 400);
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
        <Button
          title="Cancel"
          clickHandler={() => clickCancel()}
          buttonSize="medium"
          buttonStyle="sec_outline"
        />
      </Div>
    </>
  );
}

const Div = styled.div`
  display: 'flex';
  border-radius: 20px;
  padding: 10px 15px;
  background: var(--aux-100);
`;

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
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

const TrashButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--main-200-50);
  cursor: pointer;
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
