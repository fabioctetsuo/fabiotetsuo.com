import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import Layout from '../components/Layout';
import Introduction from '../components/About/Introduction';
import Resume from '../components/About/Resume';
import SEO from '../components/seo';

const CustomRow = styled.div`
  background: #6A5ACD;
  position: absolute;
  left: 0;
  width: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          <Col xs={12}>
            <Introduction />
          </Col>
        </Row>
        <CustomRow>
          <Resume />
        </CustomRow>
      </Container>
    </Layout>
  );
}

export default IndexPage;

