import styled from 'styled-components';
import media from 'styled-media-query';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 160px;

  ${media.lessThan('large')`
    margin-top: 144px;
    align-items: center;
  `}
`;

export default Section;