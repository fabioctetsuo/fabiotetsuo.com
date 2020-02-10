import styled from 'styled-components'
import media from 'styled-media-query'
import ProfileImage from '../../images/profile.svg';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProfilePicture = styled(ProfileImage)`
  width: 100px;
  height: 110px;
  margin: 0 0 16px;

  ${media.lessThan('medium')`
    width: 140px;
    height: 140px;
  `}
`;

export const ResumeWrapper = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;