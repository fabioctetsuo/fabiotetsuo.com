import * as React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"

function Success({ successContent }) {
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item xs={4} sm={4} lg={6}>
          <Img
            fluid={successContent}
            alt="E-mail enviado com sucesso, meu chapa!"
            objectFit="cover"
            style={{
              width: "100%",
              display: "table",
              alignSelf: "center",
              maxHeight: "350px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          lg={6}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">Prontinho!</Typography>
            <Typography variant="body1" style={{ marginTop: "16px" }}>
              Seu e-mail foi enviado com sucesso, eu vou entrar em contato logo
              logo
            </Typography>
            <Link to="/" style={{ textDecoration: "none", marginTop: "16px" }}>
              <Button
                style={{ marginTop: "16px" }}
                variant="contained"
                color="primary"
              >
                Voltar para o site
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Success
