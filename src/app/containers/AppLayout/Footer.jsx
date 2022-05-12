import React, { memo } from 'react';
import { StyledFooter } from './styles';
export const Footer = () => (
  <StyledFooter>
    <span>QSR Copyright 2022</span>
  </StyledFooter>
);

export default memo(Footer);
