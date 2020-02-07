import React, {Component} from "react"
import {graphql} from "gatsby"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

class PageTemplate extends Component {
    render() {
        
        const currentPage = this.props.data.wordpressPage

        
        return (
            <Layout>
                <Header />
                <section id="Page" className="projects-section bg-light">
                    <div className="container">
                        <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                        <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

                        <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
                        <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
                    </div>
                </section>
                <Footer />
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
                subtitle
            }
        }
    }
`