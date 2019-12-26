import styled from 'styled-components';
import ProfileImage from '../../../images/profile.svg';
import media from 'styled-media-query';

export const Profile = styled(ProfileImage)`
  width: 180px;
  height: 180px;
  margin: 0 0 16px;

  ${media.lessThan('large')`
    width: 140px;
    height: 140px;
  `}
`;

export const Presentation = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;

  ${media.lessThan('large')`
    width: 100%;
  `}
`;

export const TextWrapper = styled.div`
  margin: 0 0 8px;
`;