import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import * as S from "../modules/BlogPost/styled"

const globalComponents = {
  h1: props => <Typography variant="h1" {...props} />,
  h2: props => <Typography variant="h2" {...props} />,
  h3: props => <Typography variant="h3" {...props} />,
  h4: props => <Typography variant="h4" {...props} />,
  h5: props => <Typography variant="h5" {...props} />,
  h6: props => <Typography variant="h6" {...props} />,
  p: props => <Typography variant="body" {...props} />,
}

const PostTemplate = ({ data: { mdx } }) => {
  const featuredImgFluid = mdx.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        image={featuredImgFluid.src}
      />
      <Container maxWidth="md">
        <S.TitleWrapper>
          <Typography variant="h4">{mdx.frontmatter.title}</Typography>
          <Typography variant="caption">{mdx.timeToRead} min read</Typography>
        </S.TitleWrapper>
        <S.FeaturedImageWrapper>
          <Img fluid={featuredImgFluid} />
        </S.FeaturedImageWrapper>
        <MDXProvider components={globalComponents}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      timeToRead
      frontmatter {
        date(locale: "en", fromNow: true)
        title
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1914) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PostTemplate
