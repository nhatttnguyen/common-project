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
        key: MENU_ITEMS_KEYS.COLLABORATION,
        label: renderLabel(t, 'Menu.Collaboration'),
        icon: collapsed ? (
          <Tooltip
            overlayClassName="menu-tooltip addon-tooltip"
            placement="right"
            title={t('Menu.Collaboration')}
          >
            <Icon type="icon-cloud"></Icon>
          </Tooltip>
        ) : (
          <Icon type="icon-cloud"></Icon>
        ),
      },
      {
        key: MENU_ITEMS_KEYS.TRANSCRIPTION,
        label: renderLabel(t, 'Menu.Transcription'),
        icon: collapsed ? (
          <Tooltip
            overlayClassName="menu-tooltip addon-tooltip"
            placement="right"
            title={t('Menu.Transcription')}
          >
            <Icon type="icon-mic"></Icon>
          </Tooltip>
        ) : (
          <Icon type="icon-mic"></Icon>
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
