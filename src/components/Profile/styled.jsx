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

  ${media.lessThan('large')`
    margin: 0 8px 0 0;
    width: 30px;
    height: 35px;
  `}
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  ${media.lessThan('large')`
    flex-direction: row;
    align-items: center;
  `}
`;

export const PositionWrapper = styled.div`
  ${media.lessThan('large')`
    display: none;
  `}
`;

export const ResumeWrapper = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;

  ${media.lessThan('large')`
    display: none;
  `}
`;