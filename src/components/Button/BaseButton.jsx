import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  ${({
    buttonType,
    theme: {
      components: {
        button: {
          padding,
          fontFamily,
          fontSize,
          fontWeight,
          lineHeight,
          letterSpacing,
          boxSizing,
          borderWidth,
          borderStyle,
          borderRadius,
          types: {
            [buttonType]: { backgroundColor, borderColor, textColor, boxShadow },
          },
        },
      },
    },
  }) => `
    background-color: ${backgroundColor.enabled};
    box-shadow: ${boxShadow};
    box-sizing: ${boxSizing};
    border-width: ${borderWidth};
    border-style: ${borderStyle};
    border-color: ${borderColor.enabled ? borderColor.enabled : backgroundColor.enabled};
    border-radius: ${borderRadius};
    cursor: pointer;
    padding: ${padding};

    color: ${textColor.enabled};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    letter-spacing: ${letterSpacing};
    line-height: ${lineHeight};
    font-family: ${fontFamily};

    &:hover {
      background-color: ${backgroundColor.hover};
      border-color: ${borderColor.hover ? borderColor.hover : backgroundColor.hover};
      color: ${textColor.hover};
    };

    &:focus {
      background-color: ${backgroundColor.focused};
      border-color: ${borderColor.focused ? borderColor.focused : backgroundColor.focused};
      color: ${textColor.focused};
      outline: none;
    };

    &:active {
      background-color: ${backgroundColor.pressed};
      border-color: ${borderColor.pressed ? borderColor.pressed : backgroundColor.pressed};
      color: ${textColor.pressed};
    };

    &:disabled {
      background-color: ${backgroundColor.disabled};
      border-color: ${borderColor.disabled ? borderColor.disabled : backgroundColor.disabled};
      color: ${textColor.disabled};
      cursor: not-allowed;
    };
    
  `}
`;

const BaseButton = ({ children, buttonType, onClick, disabled, ...props }) => (
  <StyledButton buttonType={buttonType} onClick={onClick} disabled={disabled} {...props}>
    {children}
  </StyledButton>
);

BaseButton.defaultProps = {
  children: '',
  buttonType: 'primary',
  disabled: false,
  onClick: () => {},
};

BaseButton.propTypes = {
  children: PropTypes.node,
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'text']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default BaseButton;
