import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';

import Layout from '../components/Layout';
import Post from '../components/Post/Item';
import SEO from '../components/seo';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout sidebar>
      <SEO title="Home" />
      <Container>
        <Row>
          {posts.map(({ node }) => (
            <Col xs={4} sm={4} md={4} lg={4} key={node.id}>              
              <Post
                slug={node.fields.slug}
                item={node.frontmatter}
                timeToRead={node.timeToRead}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC})  {
      edges {
        node {
          id
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date(locale: "en", formatString: "MMMM Do YYYY")
            description
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
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
