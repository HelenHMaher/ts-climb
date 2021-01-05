import * as React from 'react';
import { render } from '@testing-library/react';

import { InputField } from '..';

describe('<InputField  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <InputField
        onChange={e => e.target.value}
        type="text"
        value="value"
        placeholder="placeholder"
        msg={{ err: false, msg: ' ' }}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
