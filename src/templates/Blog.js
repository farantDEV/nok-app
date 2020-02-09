import React from 'react';
import Link from "gatsby-link";
import Img from "gatsby-image";
import Layout from "../components/Layout";

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const IndexPage = ({ data, pageContext }) => {
    const { group, index, first, last, pageCount } = pageContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    

    return (
        <Layout>
            <div>
                <h4>{pageCount} Pages</h4>

                {group.map(({ node }) => (
                    <div key={node.slug} className={"post"} >

                    {node.featured_media.localFile.childImageSharp.fixed &&
                                            <div>
                                                <Img key={node.slug} fixed={node.featured_media.localFile.childImageSharp.fixed} />
                                            </div>
                                        }



                        <Link to={'/blog/' + node.slug}>
                            <h3>{node.title}</h3>
                        </Link>

                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                        {node.date}
                    </div>
                ))}
                <div className="previousLink">
                    <NavLink test={first} url={"/blog/" + previousUrl} text="Go to Previous Page" />
                </div>
                <div className="nextLink">
                    <NavLink test={last} url={"/blog/" + nextUrl} text="Go to Next Page" />
                </div>
            </div>
        </Layout>
    );
};
export default IndexPage;