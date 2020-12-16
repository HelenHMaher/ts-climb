import * as React from 'react';
import { render } from '@testing-library/react';

import { ConstructionNotice } from '..';

describe('<ConstructionNotice  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ConstructionNotice />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
