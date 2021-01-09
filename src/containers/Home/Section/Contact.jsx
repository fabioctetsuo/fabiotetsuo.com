import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import HomeIllustration from "../../../images/home-illustration.svg"

function Contact() {
  return (
    <Container>
      <Grid container spacing={3} style={{ margin: "72px 0" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" style={{ fontWeight: 300 }}>
            Contato
          </Typography>
          <form
            style={{ width: "100%" }}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact"
            method="POST"
            action="/contact/success"
          >
            <input type="hidden" name="form-name" value="contact" />
            <Typography style={{ marginTop: "24px" }}>
              Gostaria de conhecer mais o meu trabalho, trocar experiências ou
              até mesmo construir algo juntos? Então entre em contato através
              desse formulário que nossa equipe lhe responderá (no caso, a
              equipe sou eu e minha gatinha Phoebe)
            </Typography>
            <TextField
              name="name"
              id="name"
              label="Qual é o seu nome?"
              helperText="Gostaria de saber com quem eu vou falar <3"
              variant="outlined"
              fullWidth
              required
              style={{ marginTop: "40px" }}
            />
            <TextField
              name="email"
              id="email"
              label="E-mail"
              helperText="Qual o melhor e-mail para entrar em contato?"
              variant="outlined"
              fullWidth
              required
              style={{ marginTop: "24px" }}
            />
            <TextField
              name="description"
              id="description"
              label="Descrição"
              helperText="Digite aqui o que te levou a me contatar :)"
              variant="outlined"
              fullWidth
              rows={6}
              multiline
              required
              style={{ marginTop: "24px", marginBottom: "24px" }}
            />
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </form>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HomeIllustration style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Contact
