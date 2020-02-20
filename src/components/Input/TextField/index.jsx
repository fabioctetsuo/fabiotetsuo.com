import React from 'react';
import * as S from './styled';

const TextField = ({
  label,
  id,
  hasClose,
  onClose,
  ...props
}) => (
  <S.Container>
    <S.CustomInput
      id={id}
      placeholder=" "
      {...props}
    />
    <S.Label htmlFor={id}>{label}</S.Label>
    {hasClose && (
      <S.CloseButton onClick={onClose}>
        <S.CloseIcon />
      </S.CloseButton>
    )}
  </S.Container>
);

TextField.defaultProps = {
  onClose: () => {},
};

export default TextField;
