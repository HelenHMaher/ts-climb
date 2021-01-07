import * as React from 'react';
import { render } from '@testing-library/react';

import { TopNav } from '..';

describe('<TopNav  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TopNav />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
