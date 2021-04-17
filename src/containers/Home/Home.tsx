import * as React from "react"
import { Grid } from "@material-ui/core"
import styled from "styled-components"
import Container from "./components/Container"
import Illustration from "./components/Illustration"
import { PostProps } from "../../types/Post"

type HomeProps = {
  posts: PostProps[]
}

const CustomSpan = styled.span`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
`

const customStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
  justifyContent: "center",
}

function Home({ posts }: HomeProps) {
  return (
    <>
      <Container backgroundColor="#637CE1" backgroundSize="45%">
        <Grid container>
          <Grid item xs={12} sm={6} style={customStyle}>
            <h3 style={{ fontFamily: "Nothing You Could Do", fontSize: 24 }}>
              Olá, meu nome é Tetsuo!
            </h3>
            <h3
              style={{
                fontFamily: "Alfa Slab One",
                fontSize: 24,
                lineHeight: "32px",
              }}
            >
              Sou <CustomSpan>desenvolvedor frontend</CustomSpan> e escrevo
              sobre tecnologia e outros assuntos diversos. Gosto de passar meu
              tempo cozinhando, cuidando da minha gatinha e fazendo alguma
              lives!
            </h3>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Illustration />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
