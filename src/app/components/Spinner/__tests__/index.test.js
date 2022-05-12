import React from 'react';
import { shallow } from 'enzyme';

import Spinner from '../index';
import StyledSpinner from '../styles';

describe('<Spinner />', () => {
  it('should render the StyledSpinner', () => {
    const renderedComponent = shallow(<Spinner />);
    const spinner = renderedComponent.find(StyledSpinner).first().dive();
    expect(spinner).toBeTruthy();
  });

  it('should render the StyledSpinner with width and borderWidth', () => {
    const renderedComponent = shallow(
      <Spinner width="38px" borderWidth="2px" />,
    );
    const spinner = renderedComponent.find(StyledSpinner).first().dive();
    expect(spinner).toBeTruthy();
  });
});
