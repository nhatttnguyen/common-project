import { useLocation } from 'react-router';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Menu from 'app/components/Menu';
import { MENU_ITEMS_KEYS } from '../constant';

import { MenuSideBar } from '../index';
import StyledMenu from '../styles';

jest.mock('react-router');
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<MenuSideBar />', () => {
  beforeEach(() => {
    useLocation.mockImplementation(() => ({ hash: '#error=dummy' }));
  });
  it('should render the StyledMenu without crash', () => {
    const renderedComponent = mount(<MenuSideBar />);

    expect(renderedComponent.find(StyledMenu).length).toBe(1);
  });
  it('should render the .img-sub-logo when collapsed={true} without crash', () => {
    const renderedComponent = mount(<MenuSideBar collapsed={true} />);
    expect(renderedComponent.find('.img-sub-logo').length).toBe(1);
  });
  it('should call window.parent.postMessage when key is MENU_ITEMS_KEYS.DASHBOARD', () => {
    window.parent.postMessage = jest.fn();
    const renderedComponent = shallow(<MenuSideBar collapsed={true} />);
    renderedComponent
      .find(Menu)
      .simulate('click', { key: MENU_ITEMS_KEYS.DASHBOARD });
    expect(window.parent.postMessage).toBeCalled();
  });
  it('should not call window.parent.postMessage when key is null', () => {
    window.parent.postMessage = jest.fn();
    const renderedComponent = shallow(<MenuSideBar collapsed={true} />);
    renderedComponent.find(Menu).simulate('click', { key: null });
    expect(window.parent.postMessage).not.toBeCalled();
  });
});
