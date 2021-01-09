import styled from "styled-components"
import theme from "../../config"

export const ShareArticle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`

export const Rect = styled.div`
  width: 100%;
  height: 5px;
  background: ${theme.palette.primary.main};
  margin-right: 32px;
`
