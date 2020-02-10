import React from 'react';
import Img from 'gatsby-image';
import * as Typography from '../../Typography';
import Button from '../../Button';
import * as S from './styled';

const PostItem = ({ item, timeToRead }) => (
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
      <Typography.Caption size={2}>
        {item.date} • {timeToRead} min read
      </Typography.Caption>
      <S.TitleWrapper>
        <Typography.Heading size={4}>
          {item.title}
        </Typography.Heading>
      </S.TitleWrapper>
      <Typography.Body size={1}>{item.description}</Typography.Body>
      <S.TagWrapper>
        <S.Tag>
          <Typography.Caption size={2}>{item.category}</Typography.Caption>
        </S.Tag>
      </S.TagWrapper>
      <S.ButtonWrapper>
        <Button.Text>See more details</Button.Text>
      </S.ButtonWrapper>
    </S.InfoContainer>
  </S.Container>
);

export default PostItem;
