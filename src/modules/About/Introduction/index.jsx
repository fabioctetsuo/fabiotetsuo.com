import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as Typography from '../../../components/Typography';
import * as S from './styles';

const Introduction = () => {
  const {
    site: { siteMetadata },
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
    }   
  `);

  return (
    <S.Introduction>
      <S.Profile>
        <S.ProfileDraw
          width="160px"
          viewBox="0 0 220 244"
          preserveAspectRatio="xMidYMid meet"
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
