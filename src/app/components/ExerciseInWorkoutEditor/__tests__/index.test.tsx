import * as React from 'react';
import { render } from '@testing-library/react';

import { ExerciseInWorkoutEditor } from '..';

describe('<ExerciseInWorkoutEditor  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ExerciseInWorkoutEditor />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
