import * as React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListSubheader from "@material-ui/core/ListSubheader"
import ListItemText from "@material-ui/core/ListItemText"

function SectionTable({ sections }) {
  return (
    <List
      component="nav"
      aria-label="tabela de seções"
      subheader={<ListSubheader>Seções</ListSubheader>}
    >
      {sections.map(({ id, title }) => (
        <ListItem
          key={id}
          component="a"
          href={`#${id}`}
          style={{ color: "#000" }}
        >
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  )
}

export default SectionTable
