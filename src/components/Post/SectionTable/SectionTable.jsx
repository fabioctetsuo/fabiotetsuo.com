import * as React from "react"
import List from "@material-ui/core/List"
import ListSubheader from "@material-ui/core/ListSubheader"
import ListItemText from "@material-ui/core/ListItemText"
import * as Styled from "./styled"

function SectionTable({ sections }) {
  return (
    <List
      component="nav"
      aria-label="tabela de seções"
      subheader={<ListSubheader>Seções</ListSubheader>}
    >
      {sections.map(({ id, title }) => (
        <Styled.CustomListItem key={id} component="a" href={`#${id}`}>
          <ListItemText primary={title} />
        </Styled.CustomListItem>
      ))}
    </List>
  )
}

export default SectionTable
