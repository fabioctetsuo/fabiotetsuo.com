import * as React from "react"
import { Button as MuiButton, ButtonProps } from "@material-ui/core"

const Button = (props: ButtonProps) => {
  return <MuiButton {...props} style={{ borderRadius: 20 }} />
}

export default Button
