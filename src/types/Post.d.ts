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
        childImageSharp: GatsbyImageProps
      }
    }
  }
}

export type { PostProps };