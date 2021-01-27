import styled from "styled-components"
import ListItem from "@material-ui/core/ListItem"

type CustomListItemProps = {
  component: string
  href: string
  button: boolean
}

export const CustomListItem = styled(ListItem)<CustomListItemProps>`
  color: var(--fontColor);
`
