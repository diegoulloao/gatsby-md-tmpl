/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */


const path = require( 'path' )


exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                            path
                        }
                    }
                }
            }
        }
    `)

    if ( result.errors ) {
        console.error( result.errors )
    }

    const pages = result.data.allMarkdownRemark.edges

    pages.forEach( ({ node }) => {
        const page = node.frontmatter
        
        createPage({
            path: page.path,
            component: path.resolve( 'src/templates/page.js' )
        })
    })
}

