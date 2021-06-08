import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { graphql } from "gatsby"

import Grid from "@material-ui/core/Grid"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img, { FluidObject, GatsbyImageFixedProps } from "gatsby-image"
import { navigate } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ShareArticle from "../components/Post/Share"
import AuthorDetails from "../components/Post/AuthorDetails"
import * as S from "../modules/BlogPost/styled"
import theme from "../components/config"

const formatTitleId = (title: string) => title.replace(/ /g, "-").toLowerCase()

const style = {
  margin: "40px 0 16px 0",
  fontWeight: 500,
}

const blockQuoteStyle = {
  borderLeft: `5px solid ${theme.palette.primary.main}`,
  paddingLeft: 16,
  margin: "24px 0",
}

const globalComponents = {
  h2: (props: any) => (
    <Typography
      variant="h2"
      {...props}
      style={{ ...style, fontSize: "1.5rem" }}
    />
  ),
  h3: (props: any) => (
    <Typography
      variant="h3"
      {...props}
      style={{ ...style, fontSize: "1.4rem" }}
    />
  ),
  h4: (props: any) => (
    <Typography
      variant="h4"
      {...props}
      style={{ ...style, fontSize: "1.3rem" }}
    />
  ),
  h5: (props: any) => (
    <Typography
      {...props}
      variant="h5"
      style={{ ...style, fontSize: "1.2rem" }}
    />
  ),
  h6: (props: any) => (
    <Typography
      variant="h6"
      {...props}
      style={{ ...style, fontSize: "1.1rem" }}
    />
  ),
  p: (props: any) => <Typography variant="body1" {...props} />,
  a: (props: any) => <S.Anchor {...props} target="_blank" />,
  code: (props: any) => <code {...props} style={{ fontSize: 14 }} />,
  blockquote: (props: any) => <blockquote {...props} style={blockQuoteStyle} />,
  strong: (props: any) => <strong {...props} style={{ fontWeight: "bold" }} />,
}

type PostTemplateProps = {
  data: {
    mdx: {
      frontmatter: {
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject
          }
        }
        featuredImageAuthor: string
        featuredImageUrl: string
        title: string
        author: string
        reviewer: string
        description: string
      }
      body: string
    }
    file: {
      childImageSharp: GatsbyImageFixedProps
    }
  }
  location: {
    href: string
  }
}

const PostTemplate = ({ data: { mdx, file }, location }: PostTemplateProps) => {
  const featuredImgFluid = mdx.frontmatter.featuredImage.childImageSharp.fluid

  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        image={featuredImgFluid.src}
      />
      <Container maxWidth="sm">
        <S.TitleWrapper>
          <Typography variant="h1" style={{ fontWeight: "bold" }}>
            {mdx.frontmatter.title}
          </Typography>
          <AuthorDetails
            profilePhoto={file.childImageSharp.fixed}
            author={mdx.frontmatter.author}
            reviewer={mdx.frontmatter.reviewer}
          />
        </S.TitleWrapper>
        <S.FeaturedImageWrapper>
          <Img fluid={featuredImgFluid} />
          <Typography variant="caption" style={{ textAlign: "center" }}>
            Foto por:{" "}
            <a href={mdx.frontmatter.featuredImageUrl}>
              {mdx.frontmatter.featuredImageAuthor}
            </a>
          </Typography>
        </S.FeaturedImageWrapper>
        <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
          {mdx.frontmatter.description}
        </Typography>
        <Grid container style={{ margin: "48px 0" }}>
          <Grid item xs={12}>
            <MDXProvider components={globalComponents}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
            <ShareArticle
              link={location.href}
              title={mdx.frontmatter.title}
              description={mdx.frontmatter.description}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostTemplateQuery($id: String) {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
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
        featuredImageAuthor
        featuredImageUrl
        author
        reviewer
      }
    }
  }
`

export default PostTemplate
