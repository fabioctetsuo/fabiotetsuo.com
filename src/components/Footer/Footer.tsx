import React from "react"
import styled from "styled-components"
import { Typography, TextField, Grid } from "@material-ui/core"
import Container from "../../containers/Home/components/Container"
import Button from "../Button"
import SocialNetwork from "../SocialNetwork"

const NewsletterContainer = styled.article`
  width: 300px;
  padding: 2rem 1.5rem;
  background: var(--darkBackground);
  position: absolute;
  top: -80px;
  border-radius: 0.5rem;
`

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <Typography variant="h3" style={{ fontFamily: "Alfa Slab One" }}>
        Se inscreva em nossa newsletter
      </Typography>
      <TextField
        name="name"
        id="name"
        label="Nome"
        helperText="Como posso te chamar?"
        variant="outlined"
        fullWidth
        required
        style={{ marginTop: "2rem" }}
      />
      <TextField
        name="email"
        id="email"
        label="E-mail"
        helperText="Qual o melhor e-mail para entrar em contato?"
        variant="outlined"
        fullWidth
        required
        style={{ marginTop: "1rem", marginBottom: "2rem" }}
      />
      <Button variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </NewsletterContainer>
  )
}

const Footer = () => {
  return (
    <Container backgroundColor="#434343" width="md">
      <footer>
        <Grid container alignContent="center">
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ minHeight: 346, position: "relative" }}>
              <Newsletter />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
          >
            <SocialNetwork />
          </Grid>
        </Grid>
      </footer>
    </Container>
  )
}

export default Footer
