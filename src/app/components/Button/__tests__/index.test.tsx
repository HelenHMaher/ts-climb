import * as React from 'react';
import { render } from '@testing-library/react';

import { Button } from '..';

describe('<Button  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <Button
        buttonSize="medium"
        buttonStyle="solid"
        title="title"
        clickHandler={() => {}}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
