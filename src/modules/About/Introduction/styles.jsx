import styled from 'styled-components';
import media from 'styled-media-query';

export const ContainerWrapper = styled.section`
  display: flex;

  ${media.lessThan('medium')`
    align-items: center;
  `}
`;

export const Introduction = styled.div`
  margin: 64px 0 256px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1770px) {
    margin: 64px 0 350px;
  }

  @media (min-width: 2352px) {
    margin: 64px 0 500px;
  }

  ${media.lessThan('large')`
    margin: 32px 0 300px;
  `}

  ${media.lessThan('medium')`
    margin: 32px 0 240px;
  `}

  ${media.lessThan('small')`
    margin: 32px 0 160px;
    justify-content: center;
    align-items: center;
  `}
`;

export const Profile = styled.div`
  width: 160px;
  margin: 0 0 16px;

  ${media.lessThan('medium')`
    width: 125px;
  `}
`;

export const IntroductionText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

export const TextWrapper = styled.div`
  margin: 0 0 8px;
`;
