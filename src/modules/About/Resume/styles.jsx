import styled from 'styled-components';
import media from 'styled-media-query';
import Img from 'gatsby-image';
import DevicesImage from '../../../images/devices.svg';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const SkillsContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 0 0 8px;
  height: fit-content;
  width: 100%;
  
  @media (min-width: 500px) {
    max-width: 320px;
  }

  ${media.lessThan('medium')`
    margin: 8px 0 0 0;
  `}
`;

export const Devices = styled(DevicesImage)`
  max-width: 350px;
  width: 100%;
  height: auto;

  ${media.lessThan('medium')`
    display: none;
  `}
`;

export const TextWrapper = styled.div`
  margin-top: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 2;
  margin: 0 8px 0 0;

  ${media.lessThan('medium')`
    align-items: center;
    margin: 0 0 0 8px;
  `}
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  
  ${media.lessThan('medium')`
    grid-template-columns: repeat(4, 1fr);
  `}
`;

export const SkillItem = styled(Img)`
  width: 48px;
  border: 1px solid #C4C4C4;
  border-radius: 8px;
  filter: grayscale(100%);
  transition: box-shadow .2s;
  margin: 4px;

  &:hover {
    filter: none;
    -webkit-box-shadow: 0px 0px 8px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 8px -2px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 8px -2px rgba(0,0,0,0.75);
  }
`;
