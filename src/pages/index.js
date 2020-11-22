import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
    <Layout>
        <SEO title="Inicio" />

        <h1>Inicio</h1>
        <p>Sitio web estático contruído con Gatsby</p>

        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>

        <h3>Páginas</h3>
        <Link to="/tiendas">Tiendas</Link>
    </Layout>
)


export default IndexPage
