import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledContent } from './styles';

export const CommonLayout = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};

CommonLayout.propTypes = {
  component: PropTypes.any,
};

export default memo(CommonLayout);
