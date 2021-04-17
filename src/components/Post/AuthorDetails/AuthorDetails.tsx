import * as React from "react"
import Img, { FixedObject } from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import * as Styled from "./styled"

type AuthorDetailsProps = {
  profilePhoto: FixedObject | FixedObject[] | undefined
}

function AuthorDetails({ profilePhoto }: AuthorDetailsProps) {
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
    </Styled.Container>
  )
}

export default AuthorDetails
