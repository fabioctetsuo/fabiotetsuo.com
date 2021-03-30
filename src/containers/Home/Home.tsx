import * as React from "react"
import { PostProps } from "../../types/Post"

type HomeProps = {
  posts: PostProps[]
}

function Home({ posts }: HomeProps) {
  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default Home
