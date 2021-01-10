import * as React from "react"

import Presentation from "./Section/Presentation"
import Posts from "./Section/Posts"
import Contact from "./Section/Contact"
import Footer from "./Section/Footer"

function Home({ posts }) {
  return (
    <>
      <Presentation />
      <Posts posts={posts} />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
