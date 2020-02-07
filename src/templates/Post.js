import React, { Component } from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/HeaderAlt"
import Footer from "../components/Footer"


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                <Header />
                <section id="Post" className="projects-section bg-light">
                    <div className="container">
                        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        <p dangerouslySetInnerHTML={{__html: post.date}} />
                    </div>
                </section>
                <Footer />
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            date(formatString: "DD MMMM, YYYY")
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`