import * as React from "react"
import {
  Container as MuiContainer,
  ContainerProps,
  Typography,
  Button,
} from "@material-ui/core"
import * as Styled from "./styled"

export type Props = {
  title?: string
  backgroundColor?: string
  backgroundSize?: string
  actionText?: string
  action?: () => void
  width?: ContainerProps["maxWidth"]
}

const Container: React.FC<Props> = ({
  children,
  backgroundColor,
  backgroundSize = "100%",
  width = "lg",
  title,
  action,
  actionText,
}) => {
  return (
    <Styled.Wrapper
      backgroundColor={backgroundColor}
      backgroundSize={backgroundSize}
    >
      <MuiContainer maxWidth={width}>
        {Boolean(title) && (
          <Typography
            variant="h2"
            style={{
              fontFamily: "Alfa Slab One",
              marginBottom: "1rem",
            }}
          >
            {title}
          </Typography>
        )}
        {children}
        {action && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1.5rem",
            }}
          >
            <Button
              variant="text"
              onClick={action}
              color="primary"
              style={{ borderRadius: "1.5rem" }}
            >
              {actionText}
            </Button>
          </div>
        )}
      </MuiContainer>
    </Styled.Wrapper>
  )
}

export default Container
