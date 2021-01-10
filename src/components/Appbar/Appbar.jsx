import * as React from "react"
import { Link } from "gatsby"
import IconButton from "@material-ui/core/IconButton"
import Close from "@material-ui/icons/Close"
import { Transition } from "react-transition-group"
import Switch from "../Switch"

import * as Styled from "./styled"
import Menu from "./Menu"

const duration = 300

const defaultStyle = {
  top: "-100%",
  transition: "all 0.5s ease",
  willChange: "bottom",
}

const transitionStyles = {
  entering: {
    top: "0",
    transform: "translateY(0)",
  },
  entered: {
    top: "0",
    transform: "translateY(0)",
  },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

function Appbar({ theme, setTheme }) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Styled.Topbar>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <Styled.Logo />
          </Link>
          <Styled.ButtonWrapper onClick={() => setOpen(true)}>
            <Styled.Button>MENU</Styled.Button>
          </Styled.ButtonWrapper>
        </div>
        <Switch checked={theme === "dark"} onClick={setTheme} />
      </Styled.Topbar>
      <Transition in={open} timeout={duration}>
        {state => (
          <Styled.MenuBar
            open={open}
            style={{ ...defaultStyle, ...transitionStyles[state] }}
          >
            <IconButton
              aria-label="Github"
              color="primary"
              onClick={() => setOpen(false)}
            >
              <Close />
            </IconButton>
            <Menu transitionState={state} />
          </Styled.MenuBar>
        )}
      </Transition>
    </>
  )
}

export default Appbar
