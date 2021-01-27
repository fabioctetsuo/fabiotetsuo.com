import * as React from "react"
import styled from "styled-components"
import { Timeline, Tween } from "react-gsap"

const CustomSvg = styled.svg`
  width: 60px;
  max-width: 90vw;
  fill: none;
  stroke: var(--fontColor);
`

function Logo() {
  return (
    <CustomSvg
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="4">
        <Timeline duration={4}>
          <Tween from={{ opacity: 0 }} stagger={0.4} duration={2} position={0}>
            <path d="M2 0V150" />
            <path d="M0 148H150" />
            <path d="M148 150V0" />
            <path d="M150 2H0" />
          </Tween>
          <Tween from={{ opacity: 0, x: -50 }} duration={0.5} position={0}>
            <path d="M24 58.5H70M24 98V24H70" />
          </Tween>
          <Tween from={{ opacity: 0, x: 50 }} duration={0.5} position={0}>
            <path d="M78 61H102M126 61H102M102 61V126" />
          </Tween>
        </Timeline>
      </g>
    </CustomSvg>
  )
}

export default Logo
