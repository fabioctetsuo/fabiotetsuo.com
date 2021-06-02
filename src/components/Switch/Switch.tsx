import * as React from "react"
import styled from "styled-components"
import gsap from "gsap"

type SwitchProps = {
  checked: boolean
  onClick: () => void
}

const SwitchContainer = styled.button<SwitchProps>`
  width: 55px;
  border-radius: 16px;
  outline: none;
  border: 1px solid ${({ checked }) => (checked ? "#f1f1f1" : "#000")};
  background: ${({ checked }) => (checked ? "#23203a" : "#7fabda")};
  padding: 1px;
  cursor: pointer;
`

const Status = styled.div<{ checked: boolean }>`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: relative;
`

const Switch = ({
  checked,
  onClick,
}: {
  checked: boolean
  onClick: () => void
}) => {
  React.useEffect(() => {
    if (checked) {
      gsap.to(".switch-status", { xPercent: 70, rotate: 180 })
      gsap.to(".switch-moon-shape", { fill: "#EEEEEE" })
      gsap.to(".switch-moon-details", { opacity: 1 })
    } else {
      gsap.to(".switch-status", { xPercent: 0, rotate: 0 })
      gsap.to(".switch-moon-shape", { fill: "#FBCC27" })
      gsap.to(".switch-moon-details", { opacity: 0 })
    }
  }, [checked])

  return (
    <SwitchContainer
      onClick={onClick}
      checked={checked}
      aria-label="Trocar o tema"
    >
      <Status className="switch-status" checked={checked}>
        <svg
          className=".switch-moon"
          width="30"
          height="30"
          viewBox="0 0 346 346"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="switch-moon-shape"
            cx="173"
            cy="173"
            r="173"
            fill="#EEEEEE"
          />
          <ellipse
            opacity="0"
            className="switch-moon-details"
            cx="109"
            cy="65.5"
            rx="23"
            ry="23.5"
            fill="#DDDDDD"
          />
          <ellipse
            opacity="0"
            className="switch-moon-details"
            cx="124.5"
            cy="291"
            rx="14.5"
            ry="14"
            fill="#DDDDDD"
          />
          <circle
            opacity="0"
            className="switch-moon-details"
            cx="223"
            cy="220"
            r="4"
            fill="#DDDDDD"
          />
          <circle
            opacity="0"
            className="switch-moon-details"
            cx="240"
            cy="242"
            r="8"
            fill="#DDDDDD"
          />
          <circle
            opacity="0"
            className="switch-moon-details"
            cx="286"
            cy="97"
            r="8"
            fill="#DDDDDD"
          />
          <circle
            opacity="0"
            className="switch-moon-details"
            cx="209"
            cy="234"
            r="6"
            fill="#DDDDDD"
          />
          <circle
            opacity="0"
            className="switch-moon-details"
            cx="54.5"
            cy="141.5"
            r="31.5"
            fill="#DDDDDD"
          />
        </svg>
      </Status>
    </SwitchContainer>
  )
}

export default Switch
