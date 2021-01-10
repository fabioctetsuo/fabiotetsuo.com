import styled from "styled-components"
import LogoImage from "../../images/fabiotetsuo-logo.svg"

export const Topbar = styled.header`
  width: 100%;
  padding: 32px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled(LogoImage)`
  height: auto !important;
  stroke: var(--fontColor);
`

export const ButtonWrapper = styled.div`
  margin: 0 16px;
  padding: 0 8px;
  border-left: 1px solid var(--fontColor);
`

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 19px;
  letter-spacing: 0.2em;
  text-align: left;
  outline: none;
  color: var(--fontColor);
`

export const MenuBar = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: var(--mainBackground);
  z-index: 2;
  padding: 40px;
`
