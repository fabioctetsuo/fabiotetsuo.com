import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const ContactPage = () => {
  return (
    <Layout sidebar>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col xs={4} sm={4} md={4} lg={4}>              
            hello
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ContactPage;
