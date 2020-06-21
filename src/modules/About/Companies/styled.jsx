import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  margin: 32px 0;
`;

export const CompaniesList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  
  ${media.greaterThan('small')`
    justify-content: space-between;
    flex-direction: row;
  `}
`;

export const CompanyWrapper = styled.div`
  margin: 8px;
  width: 200px;
  
  ${media.greaterThan('small')`
    width: 150px;
  `}
`;
