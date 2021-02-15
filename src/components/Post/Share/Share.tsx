import * as React from "react"
import { Typography, IconButton } from "@material-ui/core"
import { ShareOutlined } from "@material-ui/icons"
import * as Styled from "./styled"

type ShareArticleProps = {
  link: string
  title: string
  description: string
}

const formatTweetParams = (url: string, title: string) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  return `url=${encodedUrl}&text=${encodedTitle}`
}

function ShareArticle({ link, title, description }: ShareArticleProps) {
  const [hasShareNavigator, setHasShareNavigator] = React.useState<boolean>(
    false
  )

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setHasShareNavigator(Boolean(navigator.share !== undefined))
    }
  }, [])

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
      {hasShareNavigator ? (
        <IconButton
          aria-label="Compartilhar esse artigo"
          color="default"
          onClick={() => {
            navigator
              .share({
                title,
                text: description,
                url: link,
              })
              .catch(error => console.log("Error sharing", error))
          }}
        >
          <ShareOutlined />
        </IconButton>
      ) : (
        <div style={{ display: "flex", gap: 16 }}>
          <Styled.Anchor
            target="_blank"
            rel="noopener noreferrer"
            data-size="large"
            href={`https://twitter.com/intent/tweet?${formatTweetParams(
              link,
              title
            )}`}
          >
            Twitter
          </Styled.Anchor>
        </div>
      )}
    </Styled.ShareArticle>
  )
}

export default ShareArticle
