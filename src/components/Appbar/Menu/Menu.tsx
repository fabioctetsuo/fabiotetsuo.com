import * as React from "react"
import { Link } from "gatsby"
import gsap from "gsap"
import { BurgerIcon, CustomSvg } from "../MenuIcon/MenuIcon"
import * as Styled from "./styled"

const menuItems = [
  { label: "Início", route: "/", id: "home", transitionDuration: 1000 },
  {
    label: "Blog",
    route: "/blog",
    id: "blog",
    transitionDuration: 1250,
  },
  {
    label: "Contato",
    route: "/contact",
    id: "contact",
    transitionDuration: 1500,
  },
]

type Props = {
  toggleMenu: () => void
}

const textStyle = {
  fontSize: 48,
  fill: "#434343",
  opacity: 0,
}

function Menu({ toggleMenu }: Props) {
  const menuTl = gsap.timeline({
    paused: true,
    reversed: true,
    onReverseComplete: toggleMenu,
  })

  React.useEffect(() => {
    menuTl.to(
      ".menu-top",
      {
        rotate: 45,
        x: 10,
      },
      0
    )

    menuTl.to(
      ".menu-bottom",
      {
        rotate: -45,
        x: 10,
      },
      0
    )

    menuTl.to(
      ".menu-middle",
      {
        scaleX: 0,
        duration: 0.5,
      },
      0
    )

    menuTl.to(
      ".menu-middle",
      {
        rotate: 90,
        duration: 0.1,
      },
      1
    )

    menuTl.to(
      ".menu-middle",
      {
        y: 100,
        scaleX: 10,
        scaleY: 2,
        duration: 0.5,
      },
      1.2
    )

    menuTl.to(
      ".menu-option",
      {
        opacity: 1,
        stagger: 0.2,
      },
      1.2
    )

    menuTl.play()
  }, [])

  return (
    <Styled.Container>
      <svg viewBox="0 0 300 563" width="150px">
        <BurgerIcon
          toggleMenu={() => {
            menuTl.reverse()
          }}
        />
        <Link to="/">
          <text className="menu-option" x="40" y="170" style={textStyle}>
            Home
          </text>
        </Link>
        <Link to="/blog">
          <text className="menu-option" x="40" y="340" style={textStyle}>
            Blog
          </text>
        </Link>
        <Link to="/contato">
          <text className="menu-option" x="40" y="510" style={textStyle}>
            Contato
          </text>
        </Link>
      </svg>
    </Styled.Container>
  )
}

export default Menu
