import * as React from 'react';
import { render } from '@testing-library/react';

import { Dashboard } from '..';

describe('<Dashboard  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Dashboard />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
