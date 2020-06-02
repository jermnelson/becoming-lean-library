import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Becoming a Lean Library" />
    <h1>Lessons from the World of Technology Startups</h1>
    <h2>by Jeremy Nelson</h2>
    <p>Purchase you copy from <a href="https://www.elsevier.com/books/becoming-a-lean-library/nelson/978-1-84334-779-8">Elsevier</a>&nbsp; 
    or <a href="https://www.amazon.com/Becoming-Lean-Library-Information-Professional/dp/1843347792">Amazon</a>. 
</p>
    <Link to="/book/">Book Chapters</Link> <br />
  </Layout>
)

export default IndexPage
