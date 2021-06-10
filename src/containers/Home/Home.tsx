import * as React from "react"
import { navigate } from "gatsby"
import { Grid, Typography, Hidden, TextField, Button } from "@material-ui/core"
import styled from "styled-components"
import Container from "./components/Container"
import Illustration from "./components/Illustration"
import { PostProps } from "../../types/Post"
import { ThemeContext } from "../../components/Layout"
import Card from "../../components/Post/Card"
import ContactIllustration from "../../images/home-illustration.svg"

type HomeProps = {
  posts: PostProps[]
}

const CustomSpan = styled.span<{ isDarkMode: boolean }>`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${({ isDarkMode }) =>
    isDarkMode ? "white" : "black"};
`

const customStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  justifyContent: "center",
} as React.CSSProperties

function Home({ posts }: HomeProps) {
  const { isDarkMode } = React.useContext(ThemeContext) || { isDarkMode: false }
  return (
    <>
      <Container
        width="md"
        backgroundColor={isDarkMode ? "#161925" : "#637CE1"}
        backgroundSize="45%"
      >
        <Grid container>
          <Grid item xs={12} sm={6} style={customStyle}>
            <span
              style={{
                fontFamily: "Nothing You Could Do",
                fontSize: "1.5rem",
              }}
            >
              Olá, meu nome é Tetsuo!
            </span>
            <Typography variant="h1" style={{ fontFamily: "Alfa Slab One" }}>
              Sou{" "}
              <CustomSpan isDarkMode={isDarkMode}>
                desenvolvedor frontend
              </CustomSpan>
              , escrevo sobre tecnologia e outros assuntos. Passo meu tempo
              fazendo lives, cozinhando e cuidando da minha gata!
            </Typography>
          </Grid>
          <Hidden smUp={true}>
            <Grid xs={12}>
              <div style={{ marginTop: 64 }} />
            </Grid>
          </Hidden>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Illustration />
          </Grid>
        </Grid>
      </Container>
      <Container
        backgroundColor={isDarkMode ? "#161925" : "#F7F8FC"}
        title="Coisas que eu compartilhei"
        action={() => navigate("/blog")}
        actionText="Ver todos os posts"
        width="md"
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography>
              Acredito que compartilhar conhecimento seja uma das coisas mais
              importantes, por isso tento sempre escrever alguns posts sobre
              códigos ou coisas aleatórias que acho legal compartilhar.
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "1.5rem" }} spacing={1}>
          {posts.map(post => (
            <Grid item xs={12} md={4} key={post.node.id}>
              <Card post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container title="Contato" width="md">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <form
              style={{ width: "100%" }}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contact"
              method="POST"
              action="/contact/success"
            >
              <input type="hidden" name="form-name" value="contact" />
              <Typography variant="body1">
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
                style={{ borderRadius: 20 }}
              >
                Enviar
              </Button>
            </form>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ContactIllustration style={{ width: "720px", maxWidth: "80vw" }} />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
