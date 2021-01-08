import * as React from 'react';
import { render } from '@testing-library/react';

import { ExerciseCreator } from '..';

describe('<ExerciseCreator  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ExerciseCreator />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
