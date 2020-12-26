import * as React from "react"
import GitHubIcon from "@material-ui/icons/GitHub"
import Button from "@material-ui/core/Button"

import Presentation from "./Section/Presentation"
import Posts from "./Section/Posts"
import Contact from "./Section/Contact"

function Home({ posts }) {
  return (
    <>
      <Presentation />
      <Posts posts={posts} />
      <Contact />
      <div
        style={{
          background: "#AC9FF0",
          padding: "24px 40px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a
          href="https://github.com/fabioctetsuo/fabiotetsuo.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<GitHubIcon />}
          >
            Ver no github
          </Button>
        </a>
      </div>
    </>
  )
}

export default Home
