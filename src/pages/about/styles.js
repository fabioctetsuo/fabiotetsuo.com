import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20%;
  background-color: ${({ color }) => color || 'none'};

  ${media.lessThan('large')`
    padding: 0 24px;
  `}

  ${media.lessThan('medium')`
    padding: 0 16px;
  `}
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  padding: ${({ padding }) => padding || '0'};
`;