import * as React from 'react';
import { render } from '@testing-library/react';

import { TopNav } from '..';

describe('<TopNav  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <TopNav back={true} leftButton={null} rightButton={null} title="Title" />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
