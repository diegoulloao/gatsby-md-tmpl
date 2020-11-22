/**
 *
 *  Template: Page
 *  @author diegoulloao
 *
 */
import React from "react"
import { graphql } from "gatsby"

import parse from "html-react-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"


/**
 *  Page Template Component
 */
export default ({ data }) => {
    const { date, title } = data.markdownRemark.frontmatter
    const { html } = data.markdownRemark

    return (
        <Layout>
            <SEO title={title} />

            <h1> {title} </h1>
            <h4> {date} </h4>

            <p> { parse(html) } </p>
        </Layout>

    )
}


/**
 *  Gets the markdown as page
 */
export const pageQuery = graphql`
    query( $path: String! ) {
        markdownRemark(
            frontmatter: {
                path: {
                    eq: $path
                }
            }
        ) {
            html
            frontmatter {
                date( formatString: "MMMM DD, YYYY" )
                path
                title
            }
        }
    }
`

