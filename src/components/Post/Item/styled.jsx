import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 200px;
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

export const Title = styled.h3`
  font-size: 20px;
  margin: 0 0 24px;
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
  padding: 24px;
  align-self: stretch;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
