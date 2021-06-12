import { GatsbyImageFixedProps } from "gatsby-image";

type PostProps = {
  node: {
    id: string
    fields: {
      slug: string
    }
    timeToRead: number
    frontmatter: {
      title: string
      date: string
      description: string
      category: string
      color: string
      featuredImage: {
        childImageSharp: GatsbyImageFixedProps
      }
    }
  }
}

export type { PostProps };