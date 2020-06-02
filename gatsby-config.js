module.exports = {
  siteMetadata: {
    title: `Becoming a Lean Library`,
    description: `Becoming a Lean Library book website, written by Jeremy Nelson and published by Chandros Publishing in 2015.`,
    author: `@jermnelson`,
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
        name: `becoming-lean-library`,
        short_name: ``,
        start_url: `/`,
        background_color: `#576F72`,
        theme_color: `#576F72`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
