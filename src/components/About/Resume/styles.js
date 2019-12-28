import styled from 'styled-components';
import media from 'styled-media-query';
import DevicesImage from '../../../images/devices.svg';
import CodeTagImage from '../../../images/code-tag.svg';

export const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  ${media.lessThan('medium')`
    margin-bottom: 32px;
  `}
`;

export const SkillsContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  padding: 24px;
  width: 100%;
`;

export const Devices = styled(DevicesImage)`
  max-width: 350px;
  width: 100%;
  height: auto;
`;

export const CodeTag = styled(CodeTagImage)`
  width: 40px;
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
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.lessThan('medium')`
    align-items: center;
  `}
`;