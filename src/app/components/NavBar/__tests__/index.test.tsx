import * as React from 'react';
import { render } from '@testing-library/react';

import { NavBar } from '..';

describe('<NavBar  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<NavBar />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
