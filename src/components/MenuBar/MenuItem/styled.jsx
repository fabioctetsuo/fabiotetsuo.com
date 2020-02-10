import styled from 'styled-components';

export const Container = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;

  &:last-child {
    margin: 0 0 0 8px;
  }

  &:first-child {
    margin: 0 8px 0 0;
  }
`;
