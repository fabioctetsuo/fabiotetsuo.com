import * as React from "react"
import { Link, navigate } from "gatsby"
import Img, { GatsbyImageProps } from "gatsby-image"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

type ItemProps = {
  item: {
    featuredImage: {
      childImageSharp: GatsbyImageProps
    }
    date: string
    title: string
    description: string
  }
  slug: string
  timeToRead: number
}

const Item = ({ item, slug, timeToRead }: ItemProps) => (
  <Card
    onClick={() => {
      navigate(slug)
    }}
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <CardActionArea>
      <Img
        fluid={item.featuredImage.childImageSharp.fluid}
        alt="Featured image"
        style={{ height: "200px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="caption" component="span">
          {item.date} • {timeToRead} min leitura
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Link to={slug} style={{ textDecoration: "none" }}>
        <Button size="small" color="default">
          Veja mais detalhes
        </Button>
      </Link>
    </CardActions>
  </Card>
)

export default Item
