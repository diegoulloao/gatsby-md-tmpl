import React from "react"
import { graphql } from "gatsby"

import parse from "html-react-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ data }) => {
    const { date, path, title } = data.markdownRemark.frontmatter
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


export const pageQuery = graphql`
    query( $path: String! ) {
        markdownRemark(
            frontmatter: {
                path: {
                eq: $path
            }
        }) {
            html
            frontmatter {
                date( formatString: "MMMM DD, YYYY" )
                path
                title
            }
        }
    }
`

