import * as React from "react"
import Img from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import { ABOUT_ME_TEXT } from "../../../containers/Home/Section/Presentation"
import * as Styled from "./styled"

function AuthorDetails({ profilePhoto }) {
  return (
    <Styled.Container>
      <Img
        fixed={profilePhoto}
        style={{
          borderRadius: "50%",
          minWidth: "80px",
          margin: "0 32px 0 0",
        }}
      />
      <Typography
        variant="body1"
        style={{
          fontSize: "20px",
          lineHeight: "2rem",
          fontWeight: 300,
          width: "100%",
        }}
      >
        {ABOUT_ME_TEXT.MEDIUM}
      </Typography>
    </Styled.Container>
  )
}

export default AuthorDetails
