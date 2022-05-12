import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledIcon } from './styles';

export default function Icon({ type, className, ...rest }) {
  return (
    <StyledIcon
      className={classNames(`custom-icon ${type}`, className)}
      {...rest}
    />
  );
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
};
