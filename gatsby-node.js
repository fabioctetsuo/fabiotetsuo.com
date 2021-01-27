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
      allMdx(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
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

  const posts = data.allMdx.edges
  const postsPerPage = 9
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/BlogList.tsx"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  data.allMdx.edges.forEach(({ node }) => {
    console.log({ node: node.id })
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/Post.tsx"),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })
}
