import styled from 'styled-components'
import media from 'styled-media-query'

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid var(--borders);
  background: #FFF;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
  z-index: 1;

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    padding: 8px;
    width: 100%;
  `}
`;
