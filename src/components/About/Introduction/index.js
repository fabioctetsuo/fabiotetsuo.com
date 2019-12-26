import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as Typography from '../../Typography';
import Section from '../../Section';
import * as S from './styles';

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
    <Section>
      <S.Profile />
      <S.Presentation>
        <S.TextWrapper>
          <Typography.Heading size={2}>Olá, me chamo Fabio!</Typography.Heading>
        </S.TextWrapper>
        <Typography.Heading size={3}>{siteMetadata.description}</Typography.Heading>
      </S.Presentation>
    </Section>
  )
};

export default Introduction;
