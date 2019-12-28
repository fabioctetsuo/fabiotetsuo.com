import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
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
    <Container>
      <Row>
        <Col xs={4} sm={4} md={4} lg={6} xl={6}>
          <S.AboutMeContainer>
            <Typography.Heading size={3} color="#FFFFFF">
              Falando um pouco sobre mim...
            </Typography.Heading>
            <Typography.Body color="#FFFFFF">
              Sou apaixonando pelo universo front-end, colaborei com pessoas talentosas
              na criação de novos produtos digitais. Sou super calmo e sempre busco
              resolver os problemas da melhor maneira possível.
              PS: Amo gastronomia também...
            </Typography.Body>
          </S.AboutMeContainer>
        </Col>
        <Col xs={4} sm={4} md={4} lg={6} xl={6}>
          <S.SkillsContainer>
            <Typography.Heading size={3}>
              Habilidades
            </Typography.Heading>
            <SyntaxHighlighter language="javascript" style={coy}>
              {codeString}
            </SyntaxHighlighter>
          </S.SkillsContainer>
        </Col>
      </Row>
    </Container>
  
    // <S.Container>
      
    // </S.Container>
  )
};

export default Resume;