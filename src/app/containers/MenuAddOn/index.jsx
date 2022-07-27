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

export function MenuAddOn({ collapsed }) {
  const { t } = useTranslation();

  const { handlers } = useHooks();
  const { getItems } = handlers;
  const [selectedKey, setSelectedKey] = useState(null);

  const items = getItems(t, collapsed);

  return (
    <StyledMenu collapsed={collapsed}>
      <Menu
        inlineCollapsed={collapsed}
        theme="dark"
        selectedKeys={[selectedKey]}
        mode="inline"
        items={items}
      />
    </StyledMenu>
  );
}

export default memo(MenuAddOn);
