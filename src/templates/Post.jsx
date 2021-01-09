import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Hidden from "@material-ui/core/Hidden"

import Grid from "@material-ui/core/Grid"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
// import { ABOUT_ME_TEXT } from "../containers/Home/Section/Presentation"

import Layout from "../components/Layout"
import theme from "../components/config"
import SEO from "../components/seo"
import SectionTable from "../components/Post/SectionTable"
import ShareArticle from "../components/Post/Share"
import AuthorDetails from "../components/Post/AuthorDetails"
import * as S from "../modules/BlogPost/styled"

const formatTitleId = title => title.replaceAll(" ", "-").toLowerCase()

const globalComponents = {
  h1: props => <Typography variant="h1" {...props} />,
  h2: props => <Typography variant="h2" {...props} />,
  h3: props => <Typography variant="h3" {...props} />,
  h4: props => <Typography variant="h4" {...props} />,
  h5: props => (
    <Typography variant="h5" {...props} id={formatTitleId(props.children)} />
  ),
  h6: props => <Typography variant="h6" {...props} />,
  p: props => (
    <Typography
      variant="body1"
      {...props}
      style={{ fontSize: "20px", lineHeight: "2.5rem", fontWeight: 200 }}
    />
  ),
  a: props => (
    <a
      {...props}
      style={{
        fontWeight: "bold",
        color: "#000",
        fontSize: "20px",
        textDecorationColor: theme.palette.primary.main,
        textDecorationThickness: "0.3rem",
      }}
    />
  ),
  li: props => (
    <li {...props}>
      <Typography
        variant="subtitle1"
        {...props}
        style={{ lineHeight: "2.5rem", fontWeight: 200 }}
      />
    </li>
  ),
}

const PostTemplate = ({ data: { mdx, file }, location }) => {
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
        </S.TitleWrapper>
        <S.FeaturedImageWrapper>
          <Img fluid={featuredImgFluid} />
        </S.FeaturedImageWrapper>
        <Typography variant="subtitle1" style={{ fontStyle: "italic" }}>
          {mdx.frontmatter.description}
        </Typography>
        <Grid container style={{ margin: "48px 0" }}>
          <Hidden xsDown>
            <Grid item xs={3}>
              <SectionTable sections={mdx.frontmatter.sections} />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={9}>
            <MDXProvider components={globalComponents}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
            <ShareArticle
              link={location.href}
              postTitle={mdx.frontmatter.title}
            />
            <AuthorDetails profilePhoto={file.childImageSharp.fixed} />
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
        sections {
          id
          title
        }
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
