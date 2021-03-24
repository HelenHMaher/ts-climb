import * as React from 'react';
import { render } from '@testing-library/react';

import { ExerciseList } from '..';

describe('<ExerciseList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ExerciseList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
