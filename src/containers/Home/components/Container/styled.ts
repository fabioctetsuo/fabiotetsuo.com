import styled from "styled-components"
import { Props } from "./Container"

type WrapperProps = {
  backgroundColor?: Props["backgroundColor"]
  backgroundSize?: Props["backgroundSize"]
}

export const Wrapper = styled.section<WrapperProps>`
  padding: 60px 0;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background: ${({ backgroundColor }) => backgroundColor || "transparent"};
    top: 0;
    bottom: 0;
    right: 0;
    width: ${({ backgroundSize }) => backgroundSize || "100%"};
    z-index: -1;
  }
`
