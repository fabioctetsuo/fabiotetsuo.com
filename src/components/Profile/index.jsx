import React from 'react';
import * as Typography from '../Typography';
import * as S from './styled';

const Profile = () => (
  <S.Container>
    <S.ProfilePicture />
    <Typography.Heading size={3}>
      Fabio Tetsuo
    </Typography.Heading>
    <Typography.Heading size={6}>
      Front-end Engineer
    </Typography.Heading>
    <S.ResumeWrapper>
      <Typography.Body size={2}>
        I’m a Gympass member, I like to write about front-end and some other cool stuff!
      </Typography.Body>
    </S.ResumeWrapper>
  </S.Container>
);

export default Profile;
