import * as React from "react"
import { navigate } from "gatsby"
import {
  Typography,
  Container as MuiContainer,
  IconButton,
} from "@material-ui/core"
import { ArrowBack } from "@material-ui/icons"
import * as Styled from "./styled"

type ContainerProps = {
  title: string
  titleSize: "sm" | "md" | "lg"
  backButton?: boolean
  color?: string
  background?: string
  withPadding?: boolean
  backgroundSize?: string
  backgroundFixed?: boolean
  withImageOpacity?: boolean
  withContainer?: boolean
  size?: "sm" | "md" | "lg"
}

const Content: React.FC<ContainerProps> = ({
  title,
  titleSize = "sm",
  children,
  backButton = false,
}) => (
  <>
    {title && (
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        {backButton && (
          <IconButton
            aria-label="Voltar para página anterior"
            onClick={() => navigate(-1)}
          >
            <ArrowBack />
          </IconButton>
        )}
        <Typography
          variant={titleSize === "sm" ? "h4" : "h3"}
          color="textPrimary"
        >
          {title}
        </Typography>
      </div>
    )}
    {children}
  </>
)

const Container: React.FC<ContainerProps> = props => {
  const {
    color = "#FFFFFF",
    background,
    withContainer,
    size = "md",
    withPadding = false,
    withImageOpacity = false,
    backgroundFixed = false,
    backgroundSize = "contain",
  } = props
  return (
    <Styled.Container
      color={color}
      background={background}
      withPadding={withPadding}
      backgroundSize={backgroundSize}
      backgroundFixed={backgroundFixed}
      withImageOpacity={withImageOpacity}
    >
      {withContainer ? (
        <MuiContainer maxWidth={size}>
          <Content {...props} />
        </MuiContainer>
      ) : (
        <Content {...props} />
      )}
    </Styled.Container>
  )
}

export default Container
