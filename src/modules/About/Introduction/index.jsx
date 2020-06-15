import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Typography from '../../../components/Typography';
import * as S from './styles';

const Introduction = () => {
  const {
    site: { siteMetadata },
    profileImage,
    scenarioBackground,
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
      profileImage: file(relativePath: {eq: "profile-draw.webp"}) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 160) {
            ...GatsbyImageSharpFluid_withWebp
            presentationWidth
            presentationHeight
          }
        }
      }
      scenarioBackground: file(relativePath: { eq: "background.webp" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1086) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }   
  `);

  return (
    <S.Introduction>
      <S.Profile>
        <Img
          fluid={profileImage.childImageSharp.fluid}
          alt="Profile Drawn"
          objectFit="cover"
          style={{ maxWidth: '160px', margin: '0 auto' }}
        />
      </S.Profile>
      <S.IntroductionText>
        <S.TextWrapper>
          <Typography.Heading size={2}>
            Hi, my name is Fabio!
          </Typography.Heading>
        </S.TextWrapper>
        <Typography.Heading size={4}>
          {siteMetadata.description}
        </Typography.Heading>
      </S.IntroductionText>
      <S.BackgroundImage
        fluid={scenarioBackground.childImageSharp.fluid}
        alt="Scenario background"
        objectFit="cover"
      />
    </S.Introduction>
  )
};

export default Introduction;
