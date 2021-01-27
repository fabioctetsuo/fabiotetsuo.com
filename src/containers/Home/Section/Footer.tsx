import * as React from "react"
import styled from "styled-components"
import { Button } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"

const Container = styled.div`
  background: var(--darkerBackground);
  padding: 24px 40px;
  display: flex;
  justify-content: flex-end;
`

function Footer() {
  return (
    <Container>
      <a
        href="https://github.com/fabioctetsuo/fabiotetsuo.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<GitHubIcon />}
        >
          Ver no github
        </Button>
      </a>
    </Container>
  )
}

export default Footer
