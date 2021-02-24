import styled from "styled-components"

export const Card = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 0px 10px 5px rgba(125, 125, 125, 0.2);
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background-color: rgba(220, 220, 220, 0.1);
    cursor: pointer;
  }
`

export const Tag = styled.span`
  text-transform: uppercase;
  border-radius: 16px;
  font-size: 10px;
  padding: 4px 8px;
  background-color: ${({ color }) => color};
  color: #fff;
  font-weight: 300;
`
