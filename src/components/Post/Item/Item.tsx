import * as React from "react"
import { navigate } from "gatsby"
import Img, { GatsbyImageFluidProps } from "gatsby-image"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"
import * as Styled from "./styled"
import "./styles.css"

type ItemProps = {
  item: {
    featuredImage: {
      childImageSharp: GatsbyImageFluidProps
    }
    date: string
    title: string
    description: string
    category: string
    color: string
  }
  slug: string
  timeToRead: number
}

const Item = ({ item, slug, timeToRead }: ItemProps) => (
  <Styled.Card onClick={() => navigate(slug)} className="card">
    <div>
      <Img
        fluid={item.featuredImage.childImageSharp.fluid}
        style={{ height: "200px" }}
      />
      <CardContent>
        <div style={{ marginBottom: 8 }}>
          <Styled.Tag color={item.color}>{item.category}</Styled.Tag>
        </div>
        <Typography gutterBottom variant="subtitle2" component="h3">
          {item.title}
        </Typography>
        <Typography variant="caption" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
    </div>
    <div style={{ padding: "0 16px 16px 16px" }}>
      <Typography gutterBottom variant="caption" component="span">
        {item.date} • {timeToRead} min leitura
      </Typography>
    </div>
  </Styled.Card>
)

export default Item
