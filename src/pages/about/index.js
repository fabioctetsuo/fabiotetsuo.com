import React from 'react';

import Layout from '../../components/Layout';
import Introduction from '../../modules/About/Introduction';
import Resume from '../../modules/About/Resume';
import SEO from '../../components/seo';

import * as S from './styles';


const AboutPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <S.Container>
        <S.Row>
          <Introduction />
        </S.Row>
      </S.Container>
      <S.Container color="#6A5ACD">
        <S.Row padding="48px 0 48px 0">
          <Resume />
        </S.Row>
      </S.Container>
    </Layout>
  );
}

export default AboutPage;

