import * as React from "react"
import Img, { FixedObject } from "gatsby-image"
import Typography from "@material-ui/core/Typography"
import * as Styled from "./styled"

type AuthorDetailsProps = {
  profilePhoto: FixedObject | FixedObject[]
  author: string
  reviewer: string
}

function AuthorDetails({ profilePhoto, author, reviewer }: AuthorDetailsProps) {
  return (
    <Styled.Container>
      <Img
        fixed={profilePhoto}
        style={{
          borderRadius: "50%",
          width: 40,
          height: 40,
          margin: "0 .5rem 0 0",
        }}
      />
      <Styled.Details>
        <Typography variant="caption" style={{ fontWeight: "bold" }}>
          {author}
        </Typography>
        <Typography
          variant="caption"
          style={{ fontSize: "0.7rem", lineHeight: "1.2rem" }}
        >
          Revisado por: {reviewer}
        </Typography>
      </Styled.Details>
    </Styled.Container>
  )
}

export default AuthorDetails
