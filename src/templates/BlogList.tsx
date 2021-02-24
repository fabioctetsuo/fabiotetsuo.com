import * as React from "react"
import SEO from "../components/seo"
import { graphql, navigate } from "gatsby"
import Container from "../components/Container"
import Layout from "../components/Layout"
import Post from "../components/Post/Item"
import { Grid, Button } from "@material-ui/core"
import { PostProps } from "../types/Post"

const customStyles = { display: "flex", justifyContent: "flex-end" }

type StaticQueryProps = {
  data: {
    allMdx: {
      edges: PostProps[]
    }
  }
  pageContext: {
    currentPage: number
    limit: number
    numPages: number
    skip: number
  }
}

function BlogList({ data, pageContext }: StaticQueryProps) {
  const posts = data.allMdx.edges
  const { numPages, currentPage } = pageContext
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages
  const previousPage = `/blog/${currentPage + 1}`
  const nextPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`

  return (
    <Layout>
      <SEO title="Artigos" />
      <main>
        <Container
          size="lg"
          titleSize="md"
          title="Artigos"
          withContainer
          withPadding
          color="transparent"
        >
          <Grid container spacing={4}>
            {posts.map(({ node }) => (
              <Grid item xs={12} sm={6} md={4} key={node.id}>
                <Post
                  slug={node.fields.slug}
                  item={node.frontmatter}
                  timeToRead={node.timeToRead}
                />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={4} style={{ marginTop: 16 }}>
            <Grid item xs={6}>
              {!isLastPage && (
                <Button
                  variant="text"
                  onClick={() => {
                    navigate(previousPage)
                  }}
                >
                  Ver posts mais antigos
                </Button>
              )}
            </Grid>
            <Grid item xs={6} style={customStyles}>
              {!isFirstPage && (
                <Button
                  variant="text"
                  onClick={() => {
                    navigate(nextPage)
                  }}
                >
                  Ver posts mais recentes
                </Button>
              )}
            </Grid>
          </Grid>
        </Container>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getBlogList($limit: Int, $skip: Int) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "LL", locale: "pt-BR")
            description
            color
            category
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
          fileAbsolutePath
        }
      }
    }
  }
`

export default BlogList
