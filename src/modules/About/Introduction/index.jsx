import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Typography from '../../../components/Typography';
import * as S from './styles';
import ContainerWithBackground from './ContainerWithBackground';

const Introduction = () => {
  const {
    site: { siteMetadata },
    file: profileImage,
  } = useStaticQuery(graphql`
    query ProfileData {
      site {
        siteMetadata {
          author
          authorDescription
          description
          position
          title
        }
      }
      file(relativePath: {eq: "profile-draw.webp"}) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 160) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            presentationHeight
          }
        }
      }
    }   
  `);

  return (
    <ContainerWithBackground>
      <S.ContainerWrapper>
        <S.Introduction>
          <S.Profile>
            <Img
              fluid={profileImage.childImageSharp.fluid}
              alt="Profile Drawn"
              objectFit="cover"
              style={{
                maxWidth: '160px',
                margin: '0 auto', // Used to center the image
              }}
            />

          </S.Profile>
          <S.IntroductionText>
            <S.TextWrapper>
              <Typography.Heading size={2}>
                Hi, my name is Fabio!
              </Typography.Heading>
            </S.TextWrapper>
            <Typography.Heading size={3}>
              {siteMetadata.description}
            </Typography.Heading>
          </S.IntroductionText>
        </S.Introduction>
      </S.ContainerWrapper>
    </ContainerWithBackground>
  )
};

export default Introduction;
