import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import Contact from "../../containers/Home/Section/Contact"

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Entre em contato comigo!" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
