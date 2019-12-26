import styled from 'styled-components';
import media from 'styled-media-query';

export const Paragraph = styled.p`
  font-size: 1.2rem;
`;

export const Body = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: ${({ color }) => color};
`;

export const Heading = styled.h1`
  font-family: 'Open sans', sans-serif;
  font-style: normal;
  line-height: 40px;
  color: ${({ color }) => color};
  
  font-size: ${({ size }) => {
    if (size === 1) return `42px`;
    else if (size === 2) return '33px';
    else if (size === 3) return '26px';
    else if (size === 4) return '20px';
    else if (size === 5) return '20px';
    else if (size === 6) return '16px';
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
