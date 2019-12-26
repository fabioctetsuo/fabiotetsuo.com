import styled from 'styled-components';
import media from 'styled-media-query';
import DevicesImage from '../../../images/workstation.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;

  ${media.lessThan('large')`
    flex-direction: column;
  `}
`;

export const AboutMeContainer = styled.div`
  margin-top: 64px;
  width: 684px;
  border-radius: 16px;
  background: #6A5ACD;
  padding: 24px;

  ${media.lessThan('large')`
    width: 100%;
  `}
`;

export const ContentWrapper = styled.div`
  margin-top: 16px;
  width: 80%;

  ${media.lessThan('large')`
    width: 100%;
  `}
`;

export const SkillsContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  height: 338px;
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

export const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  width: 465px;
  right: 0;

  ${media.lessThan('large')`
    align-items: center;
    right: none;
    position: relative;
    margin-top: 16px;
    width: 100%;
  `}
`;
