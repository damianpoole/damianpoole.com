module.exports = {
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/src/pages/blog/`,
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    blog: require.resolve(
                        './src/components/BlogLayout/index.js'
                    ),
                },
            },
        },
    ],
}
