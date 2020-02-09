import React, { Component } from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/HeaderAlt"
import Footer from "../components/Footer"
import Img from "gatsby-image"


class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost
        const fixed = post.featured_media.localFile.childImageSharp.fixed

        return (
            <Layout>
                <Header />
                <section id="Post" className="projects-section bg-light">
                    <div className="container">
                        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                        {fixed &&
                            <div>
                                <Img fixed={fixed}/>
                                < img src={fixed.src} alt=""/>
                            </div>
                        }
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
            
            featured_media{
                localFile{
                    childImageSharp{
                        fixed(width:500, height: 200){
                            src
                            width
                            height
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                title
                subtitle
            }
        }
    }
`