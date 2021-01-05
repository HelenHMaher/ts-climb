import * as React from 'react';
import { render } from '@testing-library/react';

import { InputField } from '..';

describe('<InputField  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<InputField />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
