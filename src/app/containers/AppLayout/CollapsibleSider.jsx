import Icon from 'app/components/Icon';
import { MenuSideBar } from 'app/containers/MenuSideBar';
import React, { memo } from 'react';
import { MenuAddOn } from '../MenuAddOn';
import { StyledSider } from './styles';

export const CollapsibleSider = ({ isCollapsed, onCollapse }) => {
  return (
    <StyledSider
      collapsible
      collapsed={isCollapsed}
      onCollapse={onCollapse}
      className="sider"
      width="200px"
      collapsedWidth="64"
      trigger={null}
    >
      <MenuSideBar collapsed={isCollapsed}></MenuSideBar>
      <div className="section">
        <div className="section-title">FAVORITES</div>
        <div className="project-item">Microbial Genetics Research</div>
        <div className="project-item">
          Nutritional Impact of Dehydrated Potato...
        </div>
        <div className="project-item">REM and Sleep Studies</div>
      </div>
      <div className="section">
        <div className="section-title">ADD-ONS</div>
      </div>
      <MenuAddOn collapsed={isCollapsed}></MenuAddOn>

      {isCollapsed ? (
        <Icon
          type="icon-arrow-right"
          className="icon-arrow-right-trigger"
          onClick={onCollapse}
        ></Icon>
      ) : (
        <Icon
          type="icon-arrow-left"
          className="icon-arrow-left-trigger"
          onClick={onCollapse}
        ></Icon>
      )}
    </StyledSider>
  );
};
export default memo(CollapsibleSider);
