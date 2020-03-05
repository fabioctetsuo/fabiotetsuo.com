import React from 'react';
import { Container } from 'react-awesome-styled-grid';
import { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import { customAwesomegrid } from '../components/config';

import * as Typography from '../components/Typography';
import * as S from '../modules/BlogPost/styled';

const globalComponents = {
  h1: props => <Typography.Heading size={1} {...props} />,
  h2: props => <Typography.Heading size={2} {...props} />,
  h3: props => <Typography.Heading size={3} {...props} />,
  h4: props => <Typography.Heading size={4} {...props} />,
  h5: props => <Typography.Heading size={5} {...props} />,
  h6: props => <Typography.Heading size={6} {...props} />,
  p: props => <Typography.Body size={1} {...props} />,
};

const PostTemplate = ({ data: { mdx } }) => {
  const featuredImgFluid = mdx.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <Layout>
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
        image={featuredImgFluid.src}
      />
      <ThemeProvider theme={{ awesomegrid: customAwesomegrid }}>
        <Container>
          <S.TitleWrapper>
            <Typography.Heading size={3}>
              {mdx.frontmatter.title}
            </Typography.Heading>
            <Typography.Caption size={1}>
              {mdx.timeToRead} min read
            </Typography.Caption>
            <Typography.Body size={1}>
              {mdx.frontmatter.description}
            </Typography.Body>
          </S.TitleWrapper>
          <S.FeaturedImageWrapper>
            <Img fluid={featuredImgFluid} />
          </S.FeaturedImageWrapper>
          <MDXProvider components={globalComponents}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </ThemeProvider>
    </Layout>
  );
};

export const pageQuery = graphql`
  query PostTemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
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

export default PostTemplate;
