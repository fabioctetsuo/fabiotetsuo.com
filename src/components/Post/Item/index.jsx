import React from 'react';
import Img from 'gatsby-image';
import * as S from './styled';

const PostItem = ({ item }) => (
  <S.Container>
    <S.ImageWrapper>
      <Img
        fluid={item.featuredImage.childImageSharp.fluid}
        alt="Featured image"
        style={{
          height: '200px',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }}
        objectFit="cover"
      />
    </S.ImageWrapper>
    <S.InfoContainer>
      <S.Category>{item.category}</S.Category>
      <S.Title>{item.title}</S.Title>
      <S.Description>{item.description}</S.Description>
      <S.DateTime>{item.date}</S.DateTime>
    </S.InfoContainer>
  </S.Container>
);

export default PostItem;
