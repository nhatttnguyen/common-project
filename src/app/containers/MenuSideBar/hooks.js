import Icon from 'app/components/Icon';
import React from 'react';
import { Tooltip } from 'antd';

import { MENU_ITEMS_KEYS } from './constant';

export const useHooks = () => {
  const renderLabel = (t, label) => {
    return <span>{t(label)}</span>;
  };

  const getItems = (t, collapsed) => {
    return [
      {
        key: 'Citavi',
        label: 'Citavi',
        icon: collapsed ? (
          <Tooltip
            overlayClassName="menu-tooltip"
            placement="right"
            title={'Citavi'}
          >
            <Icon type="icon-comma"></Icon>
          </Tooltip>
        ) : (
          <Icon type="icon-comma"></Icon>
        ),
      },
    ];
  };
  return {
    handlers: {
      getItems,
    },
  };
};
export default useHooks;
