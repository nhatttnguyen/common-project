import styled from 'styled-components';
import { media } from 'styles/media';

export const StyledLayout = styled.div`
  width: 100%;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  justify-content: space-between;
  box-shadow: 0 -1px 13px 2px rgba(0, 0, 0, 0.2);
`;

export const StyledContent = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: 80px;
  text-align: center;
`;

export const StyledAuthHeader = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 -1px 13px 2px rgba(0, 0, 0, 0.2);

  .logo-wrapper {
    display: none;
    ${media.small`
      display: block;
      padding: 15px 0 0 135px;
  `}
  }
`;
