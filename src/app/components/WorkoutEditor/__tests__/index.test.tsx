import * as React from 'react';
import { render } from '@testing-library/react';

import { WorkoutEditor } from '..';

describe('<WorkoutEditor  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<WorkoutEditor />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
