import * as React from "react"
import {
  Container as MuiContainer,
  ContainerProps,
  Grid,
} from "@material-ui/core"
import * as Styled from "./styled"

export type Props = {
  backgroundColor?: string
  backgroundSize?: string
  width?: ContainerProps["maxWidth"]
}

const Container: React.FC<Props> = ({
  children,
  backgroundColor,
  backgroundSize = "100%",
  width = "lg",
}) => {
  return (
    <Styled.Wrapper
      backgroundColor={backgroundColor}
      backgroundSize={backgroundSize}
    >
      <MuiContainer maxWidth={width}>
        <>{children}</>
      </MuiContainer>
    </Styled.Wrapper>
  )
}

export default Container
