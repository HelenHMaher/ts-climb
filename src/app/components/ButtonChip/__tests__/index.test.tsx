import * as React from 'react';
import { render } from '@testing-library/react';

import { ButtonChip } from '..';

describe('<ButtonChip  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <ButtonChip text="" clickHandler={() => {}} />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
