import React, { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import config from 'config/appConfig';
import { Menu } from 'antd';
import logo from 'assets/imgs/Nvivo-Logo-white.png';
import subLogo from 'assets/imgs/nvivowhitelogo-3.png';
import { MENU_ITEMS_KEYS, MENU_PAGE, SELECTED_MENU_KEY } from './constant';
import useHooks from './hooks';
import StyledMenu from './styles';

export function MenuSideBar({ collapsed }) {
  const { t } = useTranslation();
  const location = useLocation();

  const history = useHistory();

  const { handlers } = useHooks();
  const { getItems } = handlers;
  const [selectedKey, setSelectedKey] = useState(null);

  const items = getItems(t, collapsed);

  useEffect(() => {
    if (location.pathname === '/citavi') {
      setSelectedKey('Citavi');
    } else {
      setSelectedKey(null);
    }
  }, [location]);

  const onClick = function ({ key, keyPath, domEvent }) {
    if (key === 'Citavi') {
      history.push(`/citavi`);
    } else {
      history.push(`/`);
    }
  };
  const onHomePageClick = function ({ key, keyPath, domEvent }) {
    history.push(`/`);
  };
  return (
    <StyledMenu collapsed={collapsed}>
      {collapsed ? (
        <img
          src={subLogo}
          alt="Nvivo-Logo"
          className="img-sub-logo"
          onClick={onHomePageClick}
        ></img>
      ) : (
        <img
          src={logo}
          alt="Nvivo-Logo-white"
          className="img-logo"
          onClick={onHomePageClick}
        ></img>
      )}
      <Menu
        inlineCollapsed={collapsed}
        theme="dark"
        selectedKeys={[selectedKey]}
        mode="inline"
        items={items}
        onClick={onClick}
      />
    </StyledMenu>
  );
}

export default memo(MenuSideBar);
