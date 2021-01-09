import React from "react"
import IconButton from "@material-ui/core/IconButton"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import TwitterIcon from "@material-ui/icons/Twitter"

function SocialNetwork() {
  return (
    <>
      <a
        href="https://www.github.com/fabioctetsuo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="Github" color="primary">
          <GitHubIcon />
        </IconButton>
      </a>
      <a
        href="https://www.linkedin.com/in/fabio-tetsuo-chuman-7b0061134"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="LinkedIn" color="primary">
          <LinkedInIcon />
        </IconButton>
      </a>
      <a
        href="https://twitter.com/fabioctetsuo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconButton aria-label="Twitter" color="primary">
          <TwitterIcon />
        </IconButton>
      </a>
    </>
  )
}

export default SocialNetwork
