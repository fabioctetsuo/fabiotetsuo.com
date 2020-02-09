import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import Layout from '../components/Layout';
import Post from '../components/Post/Item';
import SEO from '../components/seo';
import { Link, graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Row>
          {posts.map(({ node }) => (
            <Col xs={4} sm={4} md={2} lg={3}>
              <Link to={node.fields.slug}>
                <Post item={node.frontmatter} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(fromNow: true, locale: "en")
            description
            category
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }  
`;

export default IndexPage;
