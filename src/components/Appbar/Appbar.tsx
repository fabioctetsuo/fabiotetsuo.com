import * as React from "react"
import { Container } from "@material-ui/core"
import { Link } from "gatsby"
import Switch from "../Switch"
import Logo from "../Logo/Logo"

import * as Styled from "./styled"
import MenuIcon from "./MenuIcon/MenuIcon"

const Menu = React.lazy(() => import("./Menu"))

type AppbarProps = {
  theme: "dark" | "light" | null
  setTheme: () => void
}

const MenuComponent = ({ toggleMenu }: { toggleMenu: () => void }) => {
  return (
    <div>
      <React.Suspense fallback={<div />}>
        <Menu toggleMenu={toggleMenu} />
      </React.Suspense>
    </div>
  )
}

function Appbar({ theme, setTheme }: AppbarProps) {
  const [showMenu, setShowMenu] = React.useState(false)
  const toggleMenu = () => () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <Container>
        <Styled.Topbar>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MenuIcon toggleMenu={toggleMenu()} isDarkMode={theme === "dark"} />
            <Link aria-label="Homepage" to="/">
              <Logo isDarkMode={theme === "dark"} />
            </Link>
          </div>
          <Switch checked={theme === "dark"} onClick={setTheme} />
        </Styled.Topbar>
      </Container>
      {showMenu && <MenuComponent toggleMenu={toggleMenu()} />}
    </>
  )
}

export default Appbar
