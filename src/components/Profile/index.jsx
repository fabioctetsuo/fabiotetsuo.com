import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import * as Typography from '../Typography';
import * as S from './styled';

const Profile = () => {
  const {
    file,
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          authorDescription
        }
      }
      file(relativePath: {eq: "fabiotetsuo.webp"}) {
        childImageSharp {
          fluid (grayscale: true, maxWidth: 150) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const { fluid: profilePhoto } = file.childImageSharp;
  return (
    <S.Container>
      <S.ProfileInfo>
        <S.ProfilePicture>
          <Img
            fluid={profilePhoto}
            alt="Fabio Tetsuo - Profile Picture"
            style={{
              borderRadius: '50%',
            }}
          />
        </S.ProfilePicture>
        <Typography.Heading size={3}>
          Fabio Tetsuo
        </Typography.Heading>
      </S.ProfileInfo>
      <S.PositionWrapper>
        <Typography.Heading size={6}>
          Front-end Engineer
        </Typography.Heading>
      </S.PositionWrapper>
      <S.ResumeWrapper>
        <Typography.Body size={2}>
          {siteMetadata.authorDescription}
        </Typography.Body>
      </S.ResumeWrapper>
    </S.Container>
  );
}

export default Profile;
