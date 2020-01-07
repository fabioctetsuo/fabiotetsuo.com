import React from 'react';
import { Row, Col } from 'react-awesome-styled-grid';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import * as Typography from '../../../components/Typography';
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
      <S.AboutWrapper>
        <S.AboutMeContainer>
          <Typography.Heading size={3} color="#FFFFFF">
            Falando um pouco sobre mim...
          </Typography.Heading>
          <S.TextWrapper>
            <Typography.Body color="#FFFFFF">
              Sou apaixonando pelo universo front-end, colaborei com pessoas talentosas
              na criação de novos produtos digitais. Sou super calmo e sempre busco
              resolver os problemas da melhor maneira possível.
              PS: Amo gastronomia também...
            </Typography.Body>
          </S.TextWrapper>
        </S.AboutMeContainer>
        <S.Devices />
      </S.AboutWrapper>
      <S.SkillsContainer>
        <S.TitleWrapper>
          <Typography.Heading size={3}>
            Habilidades
          </Typography.Heading>
          <S.CodeTag />
        </S.TitleWrapper>
        <SyntaxHighlighter language="javascript" style={coy}>
          {codeString}
        </SyntaxHighlighter>
      </S.SkillsContainer>
    </S.Container>
  )
};

export default Resume;