import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/HeaderAlt"
import Footer from "../components/Footer"

class Articlespage extends Component {
  render() {
    const data = this.props.data

    return (
      <>
       <Layout>
           <Header />

           <div id="articles">
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3>{node.excerpt}</h3>
            </div>
          ))}
        </div>

        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <h3>{node.excerpt}</h3>
          </div>
        ))}
        <Footer />
       </Layout>
      </>
    )
  }
}

export default Articlespage

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`