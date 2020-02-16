import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
            A little about myself...
          </Typography.Heading>
          <S.TextWrapper>
            <Typography.Body color="#FFFFFF">
              I'm in love with the front-end universe, I collaborated with awesome and talented people
              in the creation of new digital products! I'm really calm and I'm always targeting the 
              best solutions for my problems. P.S: I love gastronomy either!
            </Typography.Body>
          </S.TextWrapper>
        </S.AboutMeContainer>
        <S.Devices />
      </S.AboutWrapper>
      <S.SkillsContainer>
        <S.TitleWrapper>
          <Typography.Heading size={3}>
            Skills
          </Typography.Heading>
          <S.CodeTag />
        </S.TitleWrapper>
        <SyntaxHighlighter
          language="javascript"
          style={githubGist}
        >
          {codeString}
        </SyntaxHighlighter>
      </S.SkillsContainer>
    </S.Container>
  )
};

export default Resume;