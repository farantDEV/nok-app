import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/HeaderAlt"

class postListTemplate extends Component {
    render() {
        const data = this.props.data

        return(
            <Layout>
                <Header />
                <section id="allArticles" className="projects-section bg-light">

                        {data.allWordpressPost.edges.map(({node}) => (
                             <div key={node.slug} className="container">
                                <div className={"post"} style={{ marginBottom: 50 }}>
                                    <Link to={'blog/' + node.slug}><h2 className="text-black mb-4">{node.title}</h2></Link>
                                    <div className="row justify-content-center no-gutters">
                                        <div className="col-lg-6 text-center my-auto">
                                        <i className="fas fa-shield-alt fa-10x"></i>
                                        </div>
                                        <div className="col-lg-6 order-lg-first">
                                        <div className="bg-black text-center h-100 project">
                                            <div className="d-flex h-100">
                                            <div className="project-text w-100 my-auto text-center text-lg-left">
                                                <h4 className="text-white">{node.date}</h4>
                                                <div className={"post-content text-white"} dangerouslySetInnerHTML={{__html: node.excerpt}} />
                                                <hr className="d-none d-lg-block mb-0 mr-0" />
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                              </div>
                        ))}
                </section>
            </Layout>
        )
    }
}

postListTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default postListTemplate

export const pageQuery = graphql`
    query postListQuery{
        allWordpressPost{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`