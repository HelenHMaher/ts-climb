import * as React from 'react';
import { render } from '@testing-library/react';

import { TopNavButton } from '..';

describe('<TopNavButton  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TopNavButton link="/" label="to Login" />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
