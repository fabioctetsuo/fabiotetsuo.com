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
      <Typography
        variant="caption"
        color="textPrimary"
        style={{ marginRight: "40px" }}
      >
        Compartilhar esse artigo
      </Typography>
      <Styled.Anchor
        target="_blank"
        rel="noopener noreferrer"
        data-size="large"
        href={`https://twitter.com/intent/tweet?${formatTweetParams(
          link,
          postTitle
        )}`}
      >
        Twitter
      </Styled.Anchor>
    </Styled.ShareArticle>
  )
}

export default Share
