import * as React from "react"
import { graphql } from "gatsby"
import Home from "../containers/Home"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { PostProps } from "../types/Post"

type IndexPageProps = {
  data: {
    site: {
      siteMetadata: {
        description: string
      }
    }
    allMdx: {
      edges: PostProps[]
    }
  }
}

const IndexPage = ({ data }: IndexPageProps) => {
  const posts = data.allMdx.edges
  const { description } = data.site.siteMetadata

  React.useEffect(() => {
    import("../utils/renderAnimations").then(({ homeAnimation }) => {
      homeAnimation()
    })
  }, [])

  return (
    <Layout>
      <SEO title="Página inicial" description={description} />
      <Home posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMdx(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 4
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date(locale: "pt-BR", formatString: "LL")
            description
            category
            color
            featuredImage {
              childImageSharp {
                fixed(width: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
