import * as React from "react"
import { TransitionStatus } from "react-transition-group/Transition"
import { Transition } from "react-transition-group"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import * as Styled from "./styled"
import SocialNetwork from "../../SocialNetwork"

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

const getDefaultStyle = (duration: number) => ({
  position: "absolute",
  transition: `all ${duration}ms ease-in-out`,
  left: "40%",
  opacity: 0,
})

const transitionStyles = {
  entering: { left: "40px", opacity: 1 },
  entered: { left: "40px", opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
} as any

function Menu({ transitionState }: { transitionState: TransitionStatus }) {
  const inProp = transitionState === "entered"

  return (
    <Styled.Menu>
      <div style={{ marginBottom: "48px" }}>
        <Transition in={inProp} timeout={300}>
          {state => (
            <Styled.SocialLinks
              style={{ ...getDefaultStyle(1000), ...transitionStyles[state] }}
            >
              <Styled.SocialLinksBar />
              <SocialNetwork />
            </Styled.SocialLinks>
          )}
        </Transition>
      </div>
      {menuItems.map(({ label, route, id, transitionDuration }) => (
        <div
          key={id}
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "16px 0",
            height: "56px",
          }}
        >
          <Transition in={inProp} timeout={300}>
            {state => (
              <Styled.MenuItem
                style={{
                  ...getDefaultStyle(transitionDuration),
                  ...transitionStyles[state],
                }}
              >
                <Link
                  to={route}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Typography variant="h3" color="textPrimary">
                    {label}
                  </Typography>
                </Link>
              </Styled.MenuItem>
            )}
          </Transition>
        </div>
      ))}
    </Styled.Menu>
  )
}

export default Menu
