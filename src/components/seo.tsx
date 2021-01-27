/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

interface Props {
  description?: string
  lang?: string
  title?: string
  image?: string
  meta?: any
}

interface SEOQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      siteUrl: string
    }
  }
  file: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

const seoQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    file(relativePath: { eq: "twitter-image.png" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

function SEO({ description, lang = "pt-BR", meta = [], title, image }: Props) {
  const { site, file } = useStaticQuery<SEOQueryProps>(seoQuery)

  const twitterImageSrc = file.childImageSharp.fluid.src
  const metaDescription = description || site.siteMetadata.description
  const url = site.siteMetadata.siteUrl
  const ogImage = `${url}${image || twitterImageSrc}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },

        {
          name: `twitter:image`,
          content: ogImage,
        },
        {
          name: `twitter:site`,
          content: `@fabioctetsuo`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image:alt`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
