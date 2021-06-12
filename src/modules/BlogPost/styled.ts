import styled from "styled-components"
import theme from "../../components/config"

export const TitleWrapper = styled.div`
  margin: 32px 0;
`

export const FeaturedImageWrapper = styled.section`
  margin: 0 0 32px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${theme.palette.primary.main};
  }
`

export const Anchor = styled.a`
  color: var(--fontColor);
  font-weight: 500;
  text-decoration-color: ${theme.palette.primary.main};
  text-decoration-thickness: 0.2rem;
`
