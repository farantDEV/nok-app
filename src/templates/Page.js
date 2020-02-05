import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header";
import Footer from "../components/Footer";

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage

    return (
      <>
        <Layout>
          <Header />

          <h1>{StaticPage.title}</h1>
          <div>{StaticPage.content}</div>
          <Footer />
        </Layout>
      </>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        
      }
    }
  }
`