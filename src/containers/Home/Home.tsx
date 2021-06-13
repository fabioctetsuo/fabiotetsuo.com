import * as React from "react"
import { navigate } from "gatsby"
import { Grid, Typography, Hidden } from "@material-ui/core"
import withWidth, {
  isWidthDown,
  WithWidthProps,
} from "@material-ui/core/withWidth"
import styled from "styled-components"
import Container from "./components/Container"
import Illustration from "./components/Illustration"
import { PostProps } from "../../types/Post"
import { ThemeContext } from "../../components/Layout"
import Card from "../../components/Post/Card"
// import ContactIllustration from "../../images/home-illustration.svg"
import ContactForm from "./components/Contact/Contact"
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints"

interface HomeProps extends Partial<WithWidthProps> {
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

function Home({ posts, width }: HomeProps) {
  const { isDarkMode } = React.useContext(ThemeContext) || { isDarkMode: false }

  return (
    <>
      <Container
        width="md"
        backgroundColor={isDarkMode ? "#161925" : "#637CE1"}
        backgroundSize={isWidthDown("xs", width as Breakpoint) ? "0%" : "45%"}
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
            <Grid item xs={12}>
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
            <Grid
              item
              xs={12}
              md={4}
              key={post.node.id}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container title="Contato" width="md">
        <ContactForm />
      </Container>
    </>
  )
}

export default withWidth()(Home)
