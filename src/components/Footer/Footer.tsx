import React from "react"
import styled from "styled-components"
import addToMailChimp from "gatsby-plugin-mailchimp"
import { Typography, TextField, Grid, ContainerProps } from "@material-ui/core"
import Container from "../../containers/Home/components/Container"
import Button from "../Button"
import SocialNetwork from "../SocialNetwork"
import SuccessIllustration from "./SuccessIllustration"
import ErrorIllustration from "../../images/error-illustration.svg"

interface FormElements {
  name: HTMLInputElement
  email: HTMLInputElement
}

const NewsletterContainer = styled.article`
  max-width: 290px;
  padding: 2rem 1.5rem;
  background: var(--darkBackground);
  position: absolute;
  top: -80px;
  border-radius: 0.5rem;

  ${({ theme }) => theme.breakpoints.down("xs")} {
    left: calc(50% - 145px);
  }
`

const CustomGrid = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.down("xs")} {
    justify-content: center;
  }
`

const Newsletter = () => {
  const [result, setResult] = React.useState<
    "success" | "error" | "warning" | ""
  >("")
  console.log({ resultState: result })
  const [sending, setSending] = React.useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    try {
      setSending(true)
      const elements = (form.elements as unknown) as FormElements
      const email = elements.email.value
      const name = elements.name.value
      const { result } = await addToMailChimp(email, { FNAME: name })
      setResult(result)
      form.reset()
    } catch (error) {
      setResult("error")
    } finally {
      setSending(false)
    }
  }

  return (
    <NewsletterContainer>
      <Typography variant="h3" style={{ fontFamily: "Alfa Slab One" }}>
        Se inscreva em minha newsletter
      </Typography>
      {result === "success" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginTop: "2rem",
            alignItems: "center",
          }}
        >
          <SuccessIllustration />
          <Typography
            variant="body1"
            color="primary"
            style={{ textAlign: "center", fontWeight: 500 }}
          >
            E-mail cadastrado com sucesso!
          </Typography>
        </div>
      )}
      {result === "error" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            marginTop: "2rem",
            alignItems: "center",
          }}
        >
          <div style={{ width: "220px", maxWidth: "80vw" }}>
            <ErrorIllustration />
          </div>
          <Typography
            variant="body1"
            color="error"
            style={{ textAlign: "center", fontWeight: 500 }}
          >
            Parece que algo deu errado, tente novamente mais tarde.
          </Typography>
        </div>
      )}
      {result === "" && (
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            id="name"
            label="Nome"
            helperText="Como posso te chamar?"
            variant="outlined"
            required
            fullWidth
            style={{ marginTop: "2rem" }}
          />
          <TextField
            name="email"
            id="email"
            label="E-mail"
            helperText="Qual o melhor e-mail para entrar em contato?"
            variant="outlined"
            required
            fullWidth
            style={{ marginTop: "1rem", marginBottom: "2rem" }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={sending}
          >
            {sending ? "Enviando..." : "Cadastrar"}
          </Button>
        </form>
      )}
    </NewsletterContainer>
  )
}

const Footer = ({ width = "md" }: { width: ContainerProps["maxWidth"] }) => {
  return (
    <Container backgroundColor="#434343" width={width} backgroundSize="100%">
      <footer>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <div
              style={{
                minHeight: 346,
                width: "100%",
                position: "relative",
              }}
            >
              <Newsletter />
            </div>
          </Grid>
          <CustomGrid item xs={12} sm={6}>
            <SocialNetwork />
          </CustomGrid>
        </Grid>
      </footer>
    </Container>
  )
}

export default Footer
