import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import ContactSuccess from "../../containers/Contact"

const SuccessPage = ({ data }) => {
  const successContent = data.file.childImageSharp.fluid
  return (
    <Layout>
      <SEO title="Seu e-mail foi enviado com sucesso!" />
      <ContactSuccess successContent={successContent} />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "mail-sent.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`

export default SuccessPage
