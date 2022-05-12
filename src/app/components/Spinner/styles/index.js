import styled, { keyframes } from 'styled-components';

import theme from 'styles/themes/defaultTheme';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  height: ${props => (props.width ? props.width : '0')};
  width: ${props => (props.width ? props.width : '0')};
  background: transparent;
  display: inline-block;
  border-radius: 50%;
  border: ${props => (props.borderWidth ? props.borderWidth : '0')} solid
    ${theme.colors.secondary.orange};
  border-top: ${props => (props.borderWidth ? props.borderWidth : '0')} solid
    ${theme.palette.grayscale[4]};
  animation: ${spin} 1s ease-in-out infinite;
  -webkit-animation: ${spin} 1s ease-in-out infinite;
`;

export default StyledSpinner;
