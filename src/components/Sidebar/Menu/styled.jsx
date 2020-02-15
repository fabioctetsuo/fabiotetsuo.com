import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: calc(100% + 4rem);
  height: auto
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;

  ${media.lessThan("large")`
    display: none;
  `}
`;
