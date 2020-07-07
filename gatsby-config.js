module.exports = {
  siteMetadata: {
    title: 'Shohei Yamaguchi Official Website',
    description:
      '栃木県日光市選出、衆議院議員山口翔平の、公式ウェブサイトです。',
  },
  plugins: [
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require('./firebase.json'),
        types: [
          {
            type: 'Test',
            collection: 'test',
            map: doc => ({
              name: doc.name,
              title: doc.title,
            }),
          }
        ]
      },
    },
    `gatsby-plugin-twitter`,
    'gatsby-plugin-instagram-embed',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: "AIzaSyBA60tX12RMmlNWE2lRAZNDL18fmtzVvgs",
    //       authDomain: "shohei-yamaguchi.firebaseapp.com",
    //       databaseURL: "https://shohei-yamaguchi.firebaseio.com",
    //       projectId: "shohei-yamaguchi",
    //       storageBucket: "shohei-yamaguchi.appspot.com",
    //       messagingSenderId: "750379227438",
    //       appId: "1:750379227438:web:9813b5d250fa2b94b3c2bf",
    //       measurementId: "G-Y1BXQT00XJ"
    //     }
    //   }
    // },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
