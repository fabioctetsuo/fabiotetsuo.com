import * as React from "react"
import Image from "gatsby-image"
import { Grid, Button, Typography, Box, Hidden } from "@material-ui/core"
import styled from "styled-components"
import Container from "./components/Container"
import Illustration from "./components/Illustration"
import { PostProps } from "../../types/Post"
import { ThemeContext } from "../../components/Layout"

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

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 1rem;
  flex: 0 1 auto;
  height: 100%;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    background: var(--cardBackground);
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.25);
  }
`

const ArticleDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .post-image {
    margin-bottom: 1.5rem;
  }

  & > .post-title {
    margin-bottom: 1.5rem;
  }

  & > .post-description {
    margin-bottom: 2rem;
  }
`

const Card = ({ post }: { post: PostProps }) => {
  return (
    <Article>
      <ArticleDetails>
        <Image
          className="post-image"
          fixed={post.node.frontmatter.featuredImage.childImageSharp.fixed}
          style={{ borderRadius: "50%", width: 150, height: 150 }}
        />
        <Typography
          variant="body1"
          className="post-title"
          style={{ fontSize: "1.2rem", fontWeight: 400, lineHeight: "2rem" }}
        >
          {post.node.frontmatter.title}
        </Typography>
        <Typography variant="body1" className="post-description">
          {post.node.frontmatter.description}
        </Typography>
      </ArticleDetails>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        href={post.node.fields.slug}
        style={{ borderRadius: "1.5rem" }}
      >
        Ler mais
      </Button>
    </Article>
  )
}

function Home({ posts }: HomeProps) {
  const { isDarkMode } = React.useContext(ThemeContext) || { isDarkMode: false }
  return (
    <>
      <Container
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
        action={() => console.log(`say hi`)}
        actionText="Ver todos os posts"
      >
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography>
              Acredito que compartilhar conhecimento seja uma das coisas mais
              importantes, por isso tento sempre escrever alguns posts sobre
              códigos ou coisas aleatórias que acho legal compartilhar.
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "1.5rem" }} spacing={1}>
          {posts.map(post => (
            <Grid item xs={12} sm={6} md={3} key={post.node.id}>
              <Card post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home
