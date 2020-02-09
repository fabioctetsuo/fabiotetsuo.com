import React from 'react';
import { Container } from 'react-awesome-styled-grid';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { ThemeProvider } from 'styled-components';

import { customAwesomegrid } from '../components/config';
import Layout from '../components/Layout';
import * as S from '../modules/BlogPost/styled';

export default ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <ThemeProvider theme={{ awesomegrid: customAwesomegrid }}>
      <Layout>
        <Container>
          <Link to="/">
            <S.BackButton>
              Back to homepage
            </S.BackButton>
          </Link>
          <S.Title>{post.frontmatter.title}</S.Title>
          <S.FeaturedImageWrapper>
            <Img fluid={featuredImgFluid} />
          </S.FeaturedImageWrapper>
          <S.PostWrapper
            dangerouslySetInnerHTML={{ __html: post.html }}
            style={{
              fontSize: '18px',
              lineHeight: '1.8',
            }}
          />
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(locale: "en", fromNow: true)
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1914) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;