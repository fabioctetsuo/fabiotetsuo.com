import styled from "styled-components"

const hexToRGB = (hex = "#FFFFFF", alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")"
  }
}

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-image: ${({ background }) => `url(${background})`};
  background-image: ${({ background, withImageOpacity, color }) => {
    const rgba = hexToRGB(color, 0.9)
    if (withImageOpacity) {
      return `linear-gradient(0deg, ${rgba}, ${rgba}), url(${background})`
    }
    return `url(${background})`
  }};
  background-color: ${({ color }) => color || "transparent"};
  background-size: ${({ backgroundSize }) => backgroundSize};
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: ${({ backgroundFixed }) =>
    backgroundFixed ? "fixed" : "scroll"};
  padding: ${({ withPadding }) => (withPadding ? "80px 0" : "0")};
`
