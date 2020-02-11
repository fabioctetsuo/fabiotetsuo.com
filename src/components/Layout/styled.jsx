import styled from 'styled-components';
import media from "styled-media-query";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LayoutMain = styled.main`
  background: #F3F3F3;
  min-height: 100vh;
  padding: 0 0 0 20rem;
  transition: background, color 0.5s;
  width: 100%;
  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
  ${media.lessThan("large")`
    padding: 4.125rem 0 3rem 0;
  `}
`