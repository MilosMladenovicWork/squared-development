require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Belgrade Digital`,
    description: ` We develop professionally designed, fast and attention grabbing websites, web applications and graphics. We provide everything you need for your company website so you can focus on what matters the most, your product. Also, you are going to get exactly what you need in time interval that you set. We are web development company which focuses on using ReactJS for creating highly interactive websites. Our web development services include: Custom Website Design, Free Hosting, Maintenance and Scaling. We are team of developers and designers with a mission of creating engaging and user friendly websites and web applications. We are web development, web design and web application development company that is also working outside of web platforms, making designs for bussiness cards, illustrations and more. We strive to become best web development agency in a region and beyond. With use of latest technologies we are creating websites that can stand test of time with good design and appear on 1st page of Google results. We divided price ranges in three web development packages with different included services, but feel free to contact us so we can negotiate the price. We strive to make web development services affordable for our clients. We are web development company based in Belgrade. We divided price ranges in three web development packages with different included services, but feel free to contact us so we can negotiate the price. We strive to make web development services affordable for our clients. Contact our web development company today.`,
    author: `Belgrade Digital`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fredoka One']
        }
      }
    },
    {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: process.env.TAWK_ID,
        // get this from the tawk script widget
      },
    },
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
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/src/functions`,
        functionsOutput: `${__dirname}/functions`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Belgrade Digital Development`,
        short_name: `Belgrade Digital`,
        start_url: `/`,
        background_color: `#fefefe`,
        theme_color: `#F64E3E`,
        display: `minimal-ui`,
        icon: `src/images/logo-square-min.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
