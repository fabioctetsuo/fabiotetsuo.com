import * as React from "react"
import Typography from "@material-ui/core/Typography"
import * as Styled from "./styled"

const formatTweetParams = (url, title) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  return `url=${encodedUrl}&text=${encodedTitle}&via=fabioctetsuo`
}

function Share({ link, postTitle }) {
  return (
    <Styled.ShareArticle>
      <Styled.Rect />
      <Typography variant="caption" style={{ marginRight: "40px" }}>
        Compartilhar esse artigo
      </Typography>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?${formatTweetParams(
          link,
          postTitle
        )}`}
        data-size="large"
        style={{
          color: "#000",
          fontSize: "20px",
          textDecoration: "none",
        }}
      >
        Twitter
      </a>
    </Styled.ShareArticle>
  )
}

export default Share
