import React, { memo, useState } from 'react';

import Icon from 'app/components/Icon';

import { StyledFixedSider } from './styles';

export const FixedSider = ({ onCollapse, isCollapsed }) => {
  const [isAccountListVisible, setIsAccountListVisible] = useState(false);

  const onClickAccountList = () => {
    if (isCollapsed) {
      onCollapse();
    }
    setIsAccountListVisible(!isAccountListVisible);
  };
  return (
    <StyledFixedSider width="70px">
      <div className="icon-item">
        <Icon type="icon-logo-QSR" className="icon-logo"></Icon>
      </div>
      <div className="icon-item-square icon-item-selected">
        <Icon type="icon-diamond-qsr"></Icon>
      </div>
      <div className="section-2">
        <div className="icon-item-square">
          <Icon type="icon-comma-gray"></Icon>
        </div>
        <div className="icon-item-square">
          <Icon type="icon-Union"></Icon>
        </div>
      </div>
      <div className="section-3">
        <div className="icon-item-section-3" onClick={onClickAccountList}></div>
      </div>
    </StyledFixedSider>
  );
};
export default memo(FixedSider);
