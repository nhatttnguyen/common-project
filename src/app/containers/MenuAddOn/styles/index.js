import styled from 'styled-components';

const StyledMenu = styled.div`
  background: transparent;
  color: white;
  .ant-menu-dark .ant-menu-item {
    color: white;
    font-weight: 400;
  }
  .ant-menu-item .ant-menu-item-icon + span {
    margin-left: 15px;
  }
  .ant-menu-dark.ant-menu-inline .ant-menu-item {
    width: calc(100% - 16px);
  }
  .ant-menu-item {
    display: flex;
    align-items: center;
    padding: ${props =>
      props.collapsed
        ? '0px 8px 0px 10px !important'
        : '0px 0px 0px 12px !important'};
    margin: ${props =>
      props.collapsed
        ? '4px 13px 8px 13px !important'
        : '4px 5px 8px 11px !important'};
    border-radius: 5px;
  }
  .ant-menu-dark {
    background: transparent;
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)
    .ant-menu-item-selected {
    background: rgba(255, 255, 255, 0.2);
    font-weight: 700;
  }
  .img-logo {
    padding: 21px 0px 21px 20px;
  }
  .img-sub-logo {
    padding: 21px 18px;
  }
  .ant-menu-item .ant-menu-item-icon {
    font-size: 18px;
  }
  .ant-menu.ant-menu-inline-collapsed > .ant-menu-item .ant-menu-item-icon {
    font-size: 18px;
  }
  .ant-menu-vertical > .ant-menu-item {
    height: 34px;
    line-height: 34px;
  }
  .ant-menu-inline > .ant-menu-item {
    height: 34px;
    line-height: 34px;
  }
`;
export default StyledMenu;
