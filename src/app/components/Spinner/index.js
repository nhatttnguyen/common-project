import React from 'react';
import StyledSpinner from './styles';

type Props = {
  width: string,
  borderWidth: string,
};

const Spinner = ({ width, borderWidth }: Props) => (
  <StyledSpinner width={width} borderWidth={borderWidth} />
);
export default Spinner;
