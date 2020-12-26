import * as React from "react"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Post from "../../../components/Post/Item"

function Posts({ posts }) {
  return (
    <div
      style={{
        background: "#A8FBAF",
        paddingTop: "56px",
        marginTop: "72px",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ fontWeight: 300 }}>
              Coisas que eu compartilhei
            </Typography>
            <Typography style={{ maxWidth: "544px", margin: "24px 0 32px 0" }}>
              Acredito que compartilhar conhecimento seja uma das coisas mais
              importantes, por isso tento sempre escrever alguns posts sobre
              códigos ou coisas aleatórias que acho legal compartilhar.
            </Typography>
          </Grid>
          {posts.map(({ node }) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={node.id}
              style={{ background: "#A8FBAF", paddingBottom: "56px" }}
            >
              <Post
                slug={node.fields.slug}
                item={node.frontmatter}
                timeToRead={node.timeToRead}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Posts
