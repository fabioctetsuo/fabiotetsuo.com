import styled from "styled-components"
import theme from "../../config"

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
`

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`

export const SocialLinksBar = styled.div`
  width: 100px;
  height: 5px;
  background: ${theme.palette.primary.main};
  margin-right: 8px;
`
