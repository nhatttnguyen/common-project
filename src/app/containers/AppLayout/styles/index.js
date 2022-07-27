import styled from 'styled-components';
import { Layout } from 'antd';
import { color } from 'styles/colorPalette';

import { media } from 'styles/media';

const { Sider } = Layout;

export const StyledStars = styled.img`
  display: none;
  opacity: 0.5;
  ${media.medium`
  display: block;
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
`}

  ${media.large`
opacity: 1;
`}
  z-index: 1;

  position: absolute;
  bottom: 0;
  left: 0;
`;
export const StyledAccountContent = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 91px);
  background: ${color.BG_BLUE} !important;
`;

export const StyledLayout = styled.div`
  width: 100%;
`;

export const StyledHeader = styled.div`
  width: 100%;
  min-height: 91px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  box-shadow: 0 -1px 13px 2px rgba(0, 0, 0, 0.2);

  color: ${color.WHITE};
  background-color: #0369ae;
  padding: 32px 36px 0;
`;

export const StyledHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledLogo = styled.div`
  margin-right: 24px;
  cursor: pointer;
`;

export const StyledAnchor = styled.a`
  color: ${color.WHITE};
  font-size: 14px;
  font-weight: 600;
  padding-top: 12px;
  line-height: 22px;
`;

export const StyledNVivoLogoWhite = styled.img`
  width: 119px;
  height: 29px;
`;
export const StyledQSRLogoWhite = styled.img``;
export const StyledSpan = styled.span`
  font-size: 10px;
  line-height: 15px;
  font-weight: 400;
  margin-right: 4px;
`;

export const StyledContent = styled.div`
  width: 100%;
  min-height: calc(100vh);
  padding: 20px;
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
`;

export const StyledAccountLayout = styled.div`
  width: 100%;
`;

export const StyledAuthHeader = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 -1px 13px 2px rgba(0, 0, 0, 0.2);
`;

export const StyledFixedSider = styled(Sider)`
  background: linear-gradient(180deg, #1f577f 0%, #0c2e56 100%);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  .icon-item {
    width: 100%;
    text-align: center;
    padding: 20px 0;
  }

  .icon-logo {
    font-size: 28px;
  }

  .icon-item-square {
    width: 42px;
    height: 42px;
    text-align: center;
    margin-left: 14px;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 10px;
    border: 2px solid #7d868b;
  }
  .icon-comma-gray {
    font-size: 24px;
  }
  .icon-Union {
    font-size: 24px;
  }
  .icon-diamond-qsr {
    font-size: 26px;
  }
  .icon-item-square.icon-item-selected {
    background: white;
    border: 0;
    margin-bottom: 20px;
  }
  .section-2 {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
  }
  .section-3 {
    position: absolute;
    bottom: 28px;
    left: 24px;
  }
  .icon-item-section-3 {
    margin: 33px 0 0 0;
    cursor: pointer;
    font-size: 16px;
  }
  .icon-person {
    font-size: 24px;
  }
  .icon-logout {
    font-size: 24px;
  }
  .ant-popover-inner {
    border-radius: 8px;
  }
`;

export const StyledSider = styled(Sider)`
  background: linear-gradient(180deg, #1f577f 0%, #0c2e56 100%) !important;
  position: relative;
  color: white;
  .section {
    padding: 20px;
    font-size: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  .section-title {
    font-weight: 700;
  }
  .project-item {
    padding: 12.5px 0;
  }
  .icon-arrow-left-trigger {
    position: absolute;
    cursor: pointer;
    bottom: 25px;
    right: 14px;
  }
  .icon-arrow-right-trigger {
    position: absolute;
    cursor: pointer;
    bottom: 25px;
    right: 18px;
  }
`;

export const StyledAccountListPopover = styled.div`
  max-height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StyledAccountListPopoverItem = styled.div`
  padding: 16px;
  max-width: 200px;
  color: rgb(128, 128, 128);
  border-bottom: 0.25px solid rgb(151, 151, 151);
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  background-color: #f2f8ff;

  white-space: -moz-pre-wrap;
  white-space: pre-wrap;

  ${({ isCurrentAccount }) =>
    isCurrentAccount &&
    `
    background-color: rgb(6, 149, 71);
    color: #fff;
  `}
`;
