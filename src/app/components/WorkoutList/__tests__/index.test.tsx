import * as React from 'react';
import { render } from '@testing-library/react';

import { WorkoutList } from '..';

describe('<WorkoutList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<WorkoutList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
