import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <>
        <Layout>
          <Header />

          <h1>{post.title}</h1>
          <div>{post.content}</div>

          <Footer />
        </Layout>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        
      }
    }
  }
`