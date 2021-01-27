import styled from "styled-components"
import theme from "../../components/config"

export const TitleWrapper = styled.div`
  margin: 32px 0;
`

export const FeaturedImageWrapper = styled.section`
  margin: 0 0 32px;
`

export const Anchor = styled.a`
  color: var(--fontColor);
  font-weight: bold;
  font-size: 20px;
  text-decoration-color: ${theme.palette.primary.main};
  text-decoration-thickness: 0.3rem;
`
