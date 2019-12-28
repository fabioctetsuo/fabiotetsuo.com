import styled from 'styled-components';
import media from 'styled-media-query';
import DevicesImage from '../../../images/workstation.svg';

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
  text-align: right;
  height: auto;

  ${media.lessThan('large')`
    display: none;
  `}
`;

export const TextWrapper = styled.div`
  margin-top: 16px;
`;
