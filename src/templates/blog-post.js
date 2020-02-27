import React from 'react';
import { Container } from 'react-awesome-styled-grid';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { ThemeProvider } from 'styled-components';

import { customAwesomegrid } from '../components/config';
import * as Typography from '../components/Typography';
import Button from '../components/Button';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import * as S from '../modules/BlogPost/styled';

export default ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <ThemeProvider theme={{ awesomegrid: customAwesomegrid }}>
      <Layout sidebar>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          image={featuredImgFluid.src}
        />
        <Container>
          <S.ButtonWrapper>
            <Link to="/">
              <Button.Text>
                Back to homepage
              </Button.Text>
            </Link>
          </S.ButtonWrapper>
          <S.TitleWrapper>
            <Typography.Heading size={3}>
              {post.frontmatter.title}
            </Typography.Heading>
            <Typography.Caption size={1}>
              {post.timeToRead} min read
            </Typography.Caption>
            <Typography.Body size={1}>
              {post.frontmatter.description}
            </Typography.Body>
          </S.TitleWrapper>
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
      timeToRead
      frontmatter {
        date(locale: "en", fromNow: true)
        title
        description
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