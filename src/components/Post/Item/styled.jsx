import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  border-radius: 16px;
  background: #ffffff;
  margin: 32px 0;
  color: #010101;
  display: flex;
  flex-direction: column;

  -webkit-box-shadow: 0px 0px 12px 1px rgba(214,214,214,0.18);
  -moz-box-shadow: 0px 0px 12px 1px rgba(214,214,214,0.18);
  box-shadow: 0px 0px 12px 1px rgba(214,214,214,0.18);
`;

export const TitleWrapper = styled.h3`
  margin: 0 0 8px;
`;

export const TagWrapper = styled.div`
  margin: 16px 0;
`;

export const Tag = styled.div`
  width: fit-content;
  padding: 0 16px;
  border: 1px solid #6A5ACD;
  border-radius: 12px;
`;

export const Description = styled.h4`
  font-size: 16px;
`;

export const Category = styled.p`
  font-size: 12px;
  margin: 0 0 16px;
`;

export const DateTime = styled.p`
  font-size: 12px;
  margin: 24px 0 0;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0 24px;
  align-self: stretch;
  flex-wrap: wrap;
  flex: 1 0 auto;
`;

export const ImageWrapper = styled.div`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ButtonWrapper = styled.div`
  width: auto;
  display: flex;
  align-self: flex-end;
  bottom: 0;
  padding: 0 24px 24px 24px;
`;
