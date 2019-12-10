module.exports = {
  siteMetadata: {
    title: `Fabio Tetsuo`,
    description: `Eu desenho e desenvolvo aplicações simples e isso é o que amo fazer.`,
    author: `@fabioctetsuo`,
    position: `Front-end Engineer`,
    resume: `Desde o começo de minha jornada, acabei me envolvendo e me apaixonando pelo universo front-end. Tive a oportunidade de trabalhar em algumas empresas, conhecer e colaborar com pessoas incrívelmente talentosas que estavam criando novos produtos digitais. Sou uma pessoa naturalmente calma e sempre em busca de resolver os problemas da melhor maneira possível.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
