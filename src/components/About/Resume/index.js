import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as Typography from '../../Typography';
import * as S from './styles';

const Resume = () => {
  const codeString = `
    export default [
      { name: ‘ReactJS’ },
      { name: ‘GatsbyJS’ },
      { name: ‘EmberJS’ },
      { name: ‘NodeJS’ },
      { name: ‘HTML 5’ },
      { name: ‘CSS 3’ }
    ];
  `;
  return (
    <S.Container>
      <S.AboutMeContainer>
        <Typography.Heading
          size={3}
          color="#FFFFFF"
        >
          Falando um pouco sobre mim...
        </Typography.Heading>
        <S.ContentWrapper>
          <Typography.Body color="#FFFFFF">
            Sou apaixonando pelo universo front-end, colaborei com pessoas talentosas
            na criação de novos produtos digitais. Sou super calmo e sempre busco
            resolver os problemas da melhor maneira possível.
            PS: Amo gastronomia também...
          </Typography.Body>
        </S.ContentWrapper>
      </S.AboutMeContainer>
      <S.SkillsWrapper>
        <S.Devices />
        <S.SkillsContainer>
          <Typography.Heading size={3}>
            Habilidades
          </Typography.Heading>
          <SyntaxHighlighter language="javascript" style={coy}>
            {codeString}
          </SyntaxHighlighter>
        </S.SkillsContainer>
      </S.SkillsWrapper>
    </S.Container>
  )
};

export default Resume;