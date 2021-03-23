import * as React from 'react';
import { render } from '@testing-library/react';

import { ExerciseEditor } from '..';

describe('<ExerciseEditor  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ExerciseEditor />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
