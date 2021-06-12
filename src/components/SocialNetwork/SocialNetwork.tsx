import React from "react"
import IconButton from "@material-ui/core/IconButton"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"

function SocialNetwork() {
  return (
    <>
      <IconButton
        aria-label="Github"
        color="secondary"
        href="https://www.github.com/fabioctetsuo"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        aria-label="LinkedIn"
        color="secondary"
        href="https://www.linkedin.com/in/fabio-tetsuo-chuman-7b0061134"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>

      <IconButton
        aria-label="Twitter"
        color="secondary"
        href="https://twitter.com/fabioctetsuo"
        target="_blank"
      >
        <TwitterIcon />
      </IconButton>
    </>
  )
}

export default SocialNetwork
