import React from "react"
import Image from "gatsby-image"
import { Typography, Button } from "@material-ui/core"
import { PostProps } from "../../../types/Post"
import styled from "styled-components"

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 1rem;
  flex: 0 1 auto;
  height: 100%;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    background: var(--cardBackground);
    box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.25);
  }
`

const ArticleDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .post-image {
    margin-bottom: 1.5rem;
  }

  & > .post-title {
    margin-bottom: 1.5rem;
  }

  & > .post-description {
    margin-bottom: 2rem;
  }
`

const Card = ({ post }: { post: PostProps }) => {
  return (
    <Article>
      <ArticleDetails>
        <Image
          className="post-image"
          fixed={post.node.frontmatter.featuredImage.childImageSharp.fixed}
          style={{ borderRadius: "50%", width: 150, height: 150 }}
        />
        <Typography
          variant="body1"
          className="post-title"
          style={{ fontSize: "1.2rem", fontWeight: 400, lineHeight: "2rem" }}
        >
          {post.node.frontmatter.title}
        </Typography>
        <Typography variant="body1" className="post-description">
          {post.node.frontmatter.description}
        </Typography>
      </ArticleDetails>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        href={`/blog${post.node.fields.slug}`}
        style={{ borderRadius: "1.5rem" }}
      >
        Ler mais
      </Button>
    </Article>
  )
}

export default Card
