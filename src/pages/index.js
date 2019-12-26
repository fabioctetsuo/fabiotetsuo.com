import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid'

import Layout from '../components/Layout';
import Introduction from '../components/About/Introduction';
import Resume from '../components/About/Resume';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col xs={12}>
            <Introduction />
          </Col>
          <Col xs={12}>
            <Resume />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default IndexPage;

