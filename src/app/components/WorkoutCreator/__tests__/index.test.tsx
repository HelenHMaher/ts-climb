import * as React from 'react';
import { render } from '@testing-library/react';

import { WorkoutCreator } from '..';

describe('<WorkoutCreator  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<WorkoutCreator />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
