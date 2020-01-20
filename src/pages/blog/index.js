import React from 'react'
import Feature2 from '../../components/Feature2';
import { graphql, StaticQuery, Link } from 'gatsby';
import ButtonMore from '../../components/ButtonMore';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getImage } from '../../utils';

const Item = ({
    title,
    image,
    alt,
    description,
    url
}) => {
    return (
        <div className="item rounded">
            <img 
                src={image}
                alt={alt}
                className="img-fluid"
                style={{backgroundSize: "cover"}} />
            <div
                style={{backgroundColor: "#007387"}} 
                className="item__box border p-3">
                <h5 className="font-weight-bold text-white py-3">
                    {title}
                </h5>
                <ButtonMore
                    style={{backgroundColor: "#d8e500", color: "#202335", borderRadius: "18px"}} 
                    to="/" />
            </div>
        </div>
    )
}

const data2 = [{
    image: "/img/noticia1.png",
    title:"Excepteur sint occaecat cupidatat",
}, {
    image: "/img/noticia2.png",
    title:"Excepteur sint occaecat cupidatat",
}, {
    image: "/img/noticia3.png",
    title:"Excepteur sint occaecat cupidatat",
}];

const BlogSection = ({
    title,
    data
}) => {
    const posts = data.allMarkdownRemark.edges.slice(0, 3);

    console.log('posts :', posts);
    return (
        <>
            {/* Displayed in desk */}
            <section
                id="blog" 
                className="container-fluid m-0 px-0 py-5 bg-light">
                <div className="container">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2 title="Blog" />
                    </div>
                    <div className="d-none d-md-block">
                        <div className="row mt-5 pb-4">
                            {
                                posts.map((item, index) => {
                                    return (
                                        <div
                                            key={`prop${index}`} 
                                            className="col-md-4">
                                            <Item 
                                                image={getImage(item.node.frontmatter)}
                                                title={item.node.frontmatter.title}
                                                to={item.node.fields.slug} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* Displayed in mobile */}
                    <div className="d-block d-md-none">
                        <Carousel showStatus={false} showThumbs={false} emulateTouch>
                            {
                                posts.map((item, index) => (
                                    <div
                                        style={{backgroundColor: "transparent"}} 
                                        className="row px-3 px-sm-5 px-md-0">
                                            <div
                                                key={`prop${index}`} 
                                                className="col-md-4">
                                                <Item 
                                                    image={getImage(item.node.frontmatter)}
                                                    title={item.node.frontmatter.title}
                                                    to={item.node.fields.slug} />
                                            </div>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default props => (
    <StaticQuery
      query={graphql`
        query BlogSection {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            featuredimage {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            description
                            altFeatured
                        }
                    }
                }
            }
        }
      `}
      render={(data, count) => <BlogSection data={data} count={count} title="BLOG" {...props} />}
    />
  )