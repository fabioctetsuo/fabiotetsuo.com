import React from 'react';
import links from './content';
import * as S from './styled';

const SocialLinks = () => (
  <S.Container>
    {links.map((link, i) => {
      const Icon = S.Icons[link.label];
      return (
        <a
          key={link.label}
          aria-label={link.label}
          href={link.url}
          title={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <S.IconWrapper>
            <Icon />
          </S.IconWrapper>
        </a>
      )
    })}
  </S.Container>
);

export default SocialLinks;
