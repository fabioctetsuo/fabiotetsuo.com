import * as React from "react"
import styled from "styled-components"

export const CustomSvg = styled.svg`
  width: 30px;
  max-width: 90vw;
  margin-right: 32px;
`

type Props = {
  toggleMenu: () => void
  isDarkMode: boolean
}

export const BurgerIcon = ({ toggleMenu, isDarkMode }: Props) => {
  return (
    <g
      className="burguer-icon"
      style={{ cursor: "pointer" }}
      strokeWidth="7"
      stroke={isDarkMode ? "#fff" : "#434343"}
      onClick={toggleMenu}
    >
      <rect
        x="0"
        y="0"
        width="60"
        height="50"
        stroke="none"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <path className="menu-top" d="M3 3H58" />
      <path className="menu-bottom" d="M3 43H58" />
      <path className="menu-middle" d="M3 23H44" />
    </g>
  )
}

const MenuIcon = ({ toggleMenu, isDarkMode }: Props) => {
  return (
    <CustomSvg viewBox="0 0 60 50" fill="none">
      <BurgerIcon toggleMenu={toggleMenu} isDarkMode={isDarkMode} />
    </CustomSvg>
  )
}

export default MenuIcon
