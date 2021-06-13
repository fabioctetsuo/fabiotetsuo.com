import React from "react"
import { useForm } from "@formspree/react"
import { Typography, TextField, Button, Grid } from "@material-ui/core"
import Success from "./Success"

const formSpreeId = process.env.GATSBY_FORMSPREE_ID ?? ""

function ContactForm() {
  const [state, handleSubmit] = useForm(formSpreeId)

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Typography variant="body1">
            Gostaria de conhecer mais o meu trabalho, trocar experiências ou até
            mesmo construir algo juntos? Então entre em contato através desse
            formulário que nossa equipe lhe responderá (no caso, a equipe sou eu
            e minha gatinha Phoebe)
          </Typography>
          <TextField
            name="name"
            id="name"
            label="Qual é o seu nome?"
            helperText="Gostaria de saber com quem eu vou falar <3"
            variant="outlined"
            fullWidth
            required
            // color="secondary"
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={state.submitting}
            style={{ borderRadius: 20 }}
          >
            Enviar
          </Button>
        </form>
      </Grid>
      <Grid item xs={12} sm={6}>
        {state.succeeded && <Success />}
      </Grid>
    </Grid>
  )
}

export default ContactForm
