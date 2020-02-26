import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/Layout';
import SEO from '../../components/seo';
import { Heading, Body } from '../../components/Typography';
import Button from '../../components/Button';

const SuccessPage = ({ data }) => {
  const successContent = data.file.childImageSharp.fluid;
  return (
    <Layout sidebar>
      <SEO title="Your submission was sent with success!" />
      <Container>
        <Row style={{
          marginTop: '36px',
        }}>
          <Col xs={4} sm={4} lg={6}>
            <Img
              fluid={successContent}
              alt="E-mail sent with success "
              objectFit="cover"
              style={{
                width: '100%',
                display: 'table',
                alignSelf: 'center',
                maxHeight: '350px',
              }}
            />
          </Col>
          <Col xs={4} sm={4} lg={6}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <Heading size={3}>
                It's all done!
              </Heading>
              <Body size={1}>
                Your e-mail was sent with success, I'll contact you soon.
              </Body>
              <Link to="/">
                <Button style={{ marginTop: '16px' }}>
                  Go back to the site
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query {
    file(relativePath: {eq: "successcontent.webp"}) {
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

export default SuccessPage;
