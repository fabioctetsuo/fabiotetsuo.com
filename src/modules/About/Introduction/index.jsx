import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import * as Typography from '../../../components/Typography';
import * as S from './styles';

const Introduction = () => {
  const {
    site: { siteMetadata },
    profileImage,
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
        width="100%"
        viewBox="0 0 937 464"
        preserveAspectRatio="xMidYMid meet"
      />
    </S.Introduction>
  )
};

export default Introduction;
