const { createFilePath } = require("gatsby-source-filesystem")
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // if(node.internal.type === 'MarkdownRemark') {
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  data.allMdx.edges.forEach(({ node }) => {
    console.log({ node: node.id })
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/Post.jsx"),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })
}
