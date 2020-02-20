import styled from 'styled-components';
import Close from '../../../images/close.svg';

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 8px 0;
  position: relative;
`;

export const CustomInput = styled.input`
  width: 100%;
  height: auto;
  padding: 20px 16px 2px 16px;
  border-radius: 10px;
  border: 2px solid #d4d4d8;
  outline: none;

  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;

  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
  -webkit-appearance:none;

  &:focus {
    border: 2px solid #6A5ACD;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(105,90,205,0.31);
    -moz-box-shadow: 0px 0px 8px 0px rgba(105,90,205,0.31);
    box-shadow: 0px 0px 8px 0px rgba(105,90,205,0.31);
  }

  &:active {
    border: 2px solid #6A5ACD;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(105,90,205,0.31);
    -moz-box-shadow: 0px 0px 8px 0px rgba(105,90,205,0.31);
    box-shadow: 0px 0px 8px 0px rgba(105,90,205,0.31);
  }

  &:focus + label {
    font-size: 13px;
    margin-top: 12px;
    color: #6A5ACD;
  }

  &:active + label {
    font-size: 13px;
    margin-top: 12px;
    color: #6A5ACD;
  }

  &:not(:placeholder-shown) + label {
    font-size: 13px;
    margin-top: 12px;
    color: #6A5ACD;
  }

  &:not(:placeholder-shown) {
    border: 2px solid #6A5ACD;
  }
`;

export const Label = styled.label`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #a9a9b1;

  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin: 24px 0 0 18px;
  transition: all .3s ease-out;
  -webkit-transition: all .3s ease-out;
  -moz-transition: all .3s ease-out;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  margin: 24px 16px 0 0;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  outline: none;
`;

export const CloseIcon = styled(Close)`
  width: 16px;
  height: 16px;
`;