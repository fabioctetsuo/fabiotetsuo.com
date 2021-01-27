import * as React from "react"
import List from "@material-ui/core/List"
import ListSubheader from "@material-ui/core/ListSubheader"
import ListItemText from "@material-ui/core/ListItemText"
import * as Styled from "./styled"

type Sections = {
  id: string
  title: string
}

type SectionTableProps = {
  sections: Sections[]
}

function SectionTable({ sections }: SectionTableProps) {
  return (
    <List
      component="nav"
      aria-label="tabela de seções"
      subheader={<ListSubheader>Seções</ListSubheader>}
    >
      {sections.map(({ id, title }) => (
        <Styled.CustomListItem key={id} button component="a" href={`#${id}`}>
          <ListItemText primary={title} />
        </Styled.CustomListItem>
      ))}
    </List>
  )
}

export default SectionTable
