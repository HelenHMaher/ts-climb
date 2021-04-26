/**
 *
 * EditWorkout
 *
 */

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Formik, Field } from 'formik';
import { useHistory } from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { actions as workoutHistoryActions } from '../WorkoutHistory/slice';
import { selectWorkoutToEdit } from '../WorkoutHistory/selectors';
import { selectExercises } from '../Exercises/selectors';
import { editWorkoutSaga } from './saga';
import { ExerciseType } from '../AddExercise/types';

import { Workout } from '../AddWorkout/types';
import { Button } from '../../components/Button';
import { Trash } from '../../components/icons/Trash';

import { Boulder } from '../../components/icons/Boulder';
import { Sport } from '../../components/icons/Sport';
import { Cardio } from '../../components/icons/Cardio';
import { Strength } from '../../components/icons/Strength';
// import { WorkoutCreator } from 'app/components/WorkoutCreator';

interface Props {}

export function EditWorkout(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: editWorkoutSaga });

  const [typeToDisplay, setTypeToDisplay] = React.useState<ExerciseType | ''>(
    '',
  );

  const [editDate, setEditDate] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const workoutToEdit = useSelector(selectWorkoutToEdit);

  const exercises = useSelector(selectExercises);

  const clickType = (type: ExerciseType | '') => {
    if (typeToDisplay === type) {
      setTypeToDisplay('');
    } else {
      setTypeToDisplay(type);
    }
  };

  const exercisesToDisplay =
    typeToDisplay === ''
      ? exercises
      : exercises.filter(
          x => Number(x.type) === Number(ExerciseType[typeToDisplay]),
        );

  const exerciseOptions = exercisesToDisplay.map(x => {
    return (
      <ExerciseFieldLabel key={x.name}>
        <Field
          className="exerciseField"
          type="checkbox"
          name="exercises"
          value={x._id}
        />
        {x.name}
      </ExerciseFieldLabel>
    );
  });

  // eslint-disable-next-line array-callback-return
  const exerciseTypeOptions = Object.keys(ExerciseType).map(x => {
    if (!isNaN(Number(x))) {
      return (
        <Tab
          type={typeToDisplay}
          value={ExerciseType[x]}
          key={ExerciseType[x]}
          onClick={() => clickType(ExerciseType[x])}
        >
          {x === '0' ? (
            <Strength size="small" />
          ) : x === '1' ? (
            <Cardio size="small" />
          ) : x === '2' ? (
            <Boulder size="small" />
          ) : (
            <Sport size="small" />
          )}
        </Tab>
      );
    }
  });

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

  const exercisesAlreadyAdded = workoutToEdit
    ? workoutToEdit.exercises.map(x => {
        return (
          <ExerciseList key={x.id}>
            {exercises.find(y => y._id === x.id)?.name}
          </ExerciseList>
        );
      })
    : [];

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
            exercises: [],
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

              {/* TODO:  Make ExerciseGroup hidden/viewable based on "Add More Exercises" button
              TODO: Make currently selected exercises viewable in a list where you can click on each and edit it individually??
              nevermind this is for the individual Workout page */}

              <ExercisesLabel id="exercise-group">Exercises</ExercisesLabel>
              {exercisesAlreadyAdded}
              <ul>
                <ExercisesLabel id="exercise-group">
                  Add New Exercise(s)
                </ExercisesLabel>
              </ul>
              <FilterBar>
                <FilterLabel>
                  {typeToDisplay === '' ? 'DISPLAY' : typeToDisplay}
                </FilterLabel>
                {exerciseTypeOptions}
              </FilterBar>
              <ExercisesGroup role="group" aria-labelledby="exercise-group">
                {exerciseOptions}
              </ExercisesGroup>

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

const ExerciseList = styled.li`
  color: var(--main-200);
  width: 285px;
  text-align: left;
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

const Tab = styled.div<{ type: ExerciseType | ''; value: ExerciseType | '' }>`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px;
  color: ${props =>
    props.type === props.value ? 'var(--light-100)' : 'var(--main-200)'};
  background: ${props => props.type === props.value && 'var(--main-200)'};
`;

const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 30px;
`;

const FilterLabel = styled.div`
  color: var(--main-200);
  width: 100px;
`;
