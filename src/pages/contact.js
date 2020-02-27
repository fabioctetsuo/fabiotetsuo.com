import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import TextField from '../components/Input/TextField';
import TextArea from '../components/Input/TextArea';
import { Heading } from '../components/Typography';
import Button from '../components/Button';

const ContactPage = ({ data }) => {
  const contactScenario = data.file.childImageSharp.fluid;
  return (
    <Layout sidebar>
      <SEO title="Contact me!" />
      <Container>
        <Row style={{ marginTop: '16px' }}>
          <Col xs={4} sm={4} lg={6}>
            <form
              style={{ width: '100%' }}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contact"
              method="POST"
              action="/contact/success"
            >
              <Heading size={3}>
                Contact me!
              </Heading>
              <input type="hidden" name="form-name" value="contact" />
              <TextField
                label="What's your full name? *"
                id="name"
                type="text"
                name="name"
                helperText="Would you mind to tell your name?"
                required
              />
              <TextField
                label="E-mail *"
                id="email"
                type="email"
                name="email"
                helperText="What is your best e-mail so I can contact you?"
                required
              />
              <TextField
                label="Your website"
                id="website"
                type="text"
                name="website"
                helperText="Do you have a website?"
              />
              <TextArea
                label="Describe your project *"
                id="message"
                name="message"
                rows="8"
                helperText="Tell me more about your project, your goals and how can I help you."
                required
              />
              <Button type="submit">
                Submit
              </Button>
            </form>
          </Col>
          <Col xs={4} sm={4} lg={6}>
            <Img
              fluid={contactScenario}
              alt="Contact scenario"
              objectFit="cover"
              style={{
                width: '100%',
                display: 'table',
                alignSelf: 'center',
                maxHeight: '350px',
              }}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    file(relativePath: {eq: "contactscenario.webp"}) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`;

export default ContactPage;
