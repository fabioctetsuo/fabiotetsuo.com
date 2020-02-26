import React from 'react';
import { Caption } from '../../Typography';
import * as S from './styled';

const TextArea = React.forwardRef((props, ref) => (
  <S.Container>
    <S.CustomInput
      hasError={props.hasError}
      ref={ref}
      id={props.id}
      placeholder=" "
      {...props}
    />
    <S.Label
      htmlFor={props.id}
      hasError={props.hasError}
    >
      {props.label}
    </S.Label>
    {props.hasClose && (
      <S.CloseButton onClick={props.onClose}>
        <S.CloseIcon />
      </S.CloseButton>
    )}
    <Caption hasError={props.hasError} size={2}>
      {props.helperText}
    </Caption>  
  </S.Container>
));

TextArea.defaultProps = {
  onClose: () => {},
};

export default TextArea;
