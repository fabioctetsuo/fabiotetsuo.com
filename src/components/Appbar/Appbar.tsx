import * as React from "react"
import { Link } from "gatsby"
import Switch from "../Switch"
import Logo from "../Logo/Logo"

import * as Styled from "./styled"
import Menu from "./Menu"
import MenuIcon from "./MenuIcon/MenuIcon"

type AppbarProps = {
  theme: "dark" | "light" | null
  setTheme: () => void
}

function Appbar({ theme, setTheme }: AppbarProps) {
  const [showMenu, setShowMenu] = React.useState(false)
  const toggleMenu = () => () => {
    setShowMenu(!showMenu)
  }

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
          <MenuIcon toggleMenu={toggleMenu()} />
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <Switch checked={theme === "dark"} onClick={setTheme} />
      </Styled.Topbar>
      {showMenu && <Menu toggleMenu={toggleMenu()} />}
    </>
  )
}

export default Appbar
