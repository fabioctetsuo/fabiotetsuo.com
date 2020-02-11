import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import * as Typography from '../../../components/Typography';
import * as S from './styles';
import ContainerWithBackground from './ContainerWithBackground';

const Introduction = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
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
    <S.Container>
      <ContainerWithBackground>
        <S.IntroductionWrapper>
          <S.Introduction>
            <S.Profile />
            <S.Presentation>
              <S.TextWrapper>
                <Typography.Heading size={2}>Hi, my name is Fabio!</Typography.Heading>
              </S.TextWrapper>
              <Typography.Heading size={3}>{siteMetadata.description}</Typography.Heading>
            </S.Presentation>
          </S.Introduction>
        </S.IntroductionWrapper>
      </ContainerWithBackground>
    </S.Container>
  )
};

export default Introduction;
