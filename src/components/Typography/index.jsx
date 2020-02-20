import styled from 'styled-components';
import media from 'styled-media-query';

export const Paragraph = styled.p`
  font-size: 1.2rem;
`;

export const Caption = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;

  ${({ size }) => {
    if (size === 1) {
      return `
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
      `;
    }
    if (size === 2) {
      return `
        font-weight: normal;
        font-size: 12px;
        line-height: 21px;
      `;
    }
  }}
  
`;

export const Body = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: ${({ color }) => color};

  ${({ size }) => {
    if (size === 1) {
      return `
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
      `
    }
    if (size === 2) {
      return `
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 21px;
      `
    }
  }}
`;

export const Heading = styled.h1`
  font-family: 'Open sans', sans-serif;
  font-style: normal;
  line-height: 40px;
  color: ${({ color }) => color};
  
  ${({ size }) => {
    if (size === 1) {
      return `
        font-size: 42px;
        line-height: 67px;
        font-weight: bold;
      `
    }
    if (size === 2) {
      return `
        font-style: normal;
        font-weight: 600;
        font-size: 33px;
        line-height: 53px;
      `
    }
    if (size === 3) {
      return `
        font-style: normal;
        font-weight: 600;
        font-size: 26px;
        line-height: 42px;
      `
    }
    if (size === 4) {
      return `
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
      `
    }
    if (size === 5) {
      return `
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 32px;
      `
    }
    if (size === 6) {
      return `
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
      `
    }
  }}

  ${media.lessThan('large')`
    line-height: 32px;
    font-size: ${({ size }) => {
      if (size === 1) return `36px`;
      else if (size === 2) return '25px';
      else if (size === 3) return '18px';
      else if (size === 4) return '14px';
      else if (size === 5) return '14px';
      else if (size === 6) return '8px';
    }}
  `}
`;
