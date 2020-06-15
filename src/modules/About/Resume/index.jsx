import React from 'react';
import * as Typography from '../../../components/Typography';
import * as S from './styles';

const Resume = () => {
  return (
    <S.Container>
      <S.AboutWrapper>
        <S.AboutMeContainer>
          <Typography.Heading size={4} color="#FFFFFF">
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
          <Typography.Heading size={4}>
            Skills
          </Typography.Heading>
        </S.TitleWrapper>
      </S.SkillsContainer>
    </S.Container>
  )
};

export default Resume;