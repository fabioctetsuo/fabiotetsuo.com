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
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
          crossOrigin: "anonymous",
        },
        {
          rel: "preload",
          href:
            "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Nothing+You+Could+Do&family=Roboto:wght@300;400;500&display=swap",
          as: "style",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Nothing+You+Could+Do&family=Roboto:wght@300;400;500&display=swap",
          media: "print",
          onLoad: "this.media='all'" as any,
        },
      ]}
    >
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@fabioctetsuo" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image:alt" content={metaDescription} />
      <noscript>
        {`
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Nothing+You+Could+Do&family=Roboto:wght@300;400;500&display=swap" />
        `}
      </noscript>
    </Helmet>
  )
}

export default SEO
