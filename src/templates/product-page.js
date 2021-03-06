import React from 'react'
import TemplateWrapper2 from '../components/Layout2'
import { getImage } from '../utils';
import { Link as LinkScroll } from "react-scroll";

const Subitem = ({
    image,
    alt,
    title,
    price
}) => {
    return (
        <div>
            <img
                className="w-100" 
                src={image} alt={alt} />
            <span className="text-muted d-block">{title}</span>
            <div>
                <h6 className="d-inline text-muted font-weight-bold">$</h6>
                <h5 className="d-inline text-muted font-weight-bold">
                    {price}
                </h5>
            </div>
        </div>
    )
}

const Product = ({
    location,
    data
}) => {
    const items = data.allMarkdownRemark.edges;

  return (
    <TemplateWrapper2 location={location}>
        <div id="product">
            <div
                className="container mt-3 mt-md-5">
                <div className="d-flex justify-content-between flex-wrap">
                    {
                        items.map((item, index) => (
                            <LinkScroll 
                                className="c-pointer"
                                duration={500}
                                smooth={true} 
                                to={`${item.node.frontmatter.name}`}>
                                <div className="mx-auto d-flex flex-column align-items-center justify-content-start mb-3 mr-sm-3 mr-md-4">
                                    <div
                                        className="align-items-start d-block bg-info framew d-flex align-items-center justify-content-center rounded-circle">
                                            <img 
                                                src={getImage(item.node.frontmatter.cover, "imageProd")}
                                                alt={item.node.frontmatter.cover.alt}
                                                className="framew__img img-fluid"
                                                />
                                    </div>
                                    <span
                                        style={{width: "6rem"}} 
                                        className="text-info text-center d-block">
                                        {item.node.frontmatter.name}
                                    </span>
                                </div>
                            </LinkScroll>
                        ))
                    }
                </div>
            </div>
            {
                items.map((item, index) => (
                    <section
                        id={item.node.frontmatter.name} 
                        className="container-fluid bg-light px-0 mb-5">
                        <div className="container py-5">
                            <div className="d-flex align-items-center mb-3 mr-sm-3">
                                <div
                                    className="mr-3 align-items-start d-block bg-info framew-big d-flex align-items-center justify-content-center rounded-circle">
                                        <img 
                                            src={getImage(item.node.frontmatter.cover, "imageProd")}
                                            alt={item.node.frontmatter.cover.altProd}
                                            className="framew-big__img img-fluid"
                                            />
                                </div>
                                <h3
                                    className="text-info text-center d-block">
                                    {item.node.frontmatter.name}
                                </h3>
                            </div>
                            <div className="row d-flex justify-content-center">
                                {
                                        item.node.frontmatter.prod.map((sub, index2) => ( 
                                            <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
                                                <Subitem 
                                                    key={`prod${index}${index2}`}
                                                    image={getImage(sub)}
                                                    alt={sub.alt}
                                                    title={sub.title}
                                                    price={sub.price} />
                                            </div>
                                        ))
                                }
                            </div>
                        </div>
                    </section>
                ))
            }
        </div>
    </TemplateWrapper2>
  )
}

export default Product;

export const productQuery = graphql`
  query ProductPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
        fields {
            slug
        }
        frontmatter {
            name
            cover {
                alt
                image {
                    childImageSharp {
                      fluid {
                        ...GatsbyImageSharpFluid
                      }
                    }
                    extension
                    publicURL
                }
            }
            prod {
                name
                price
            }
        }
    }

    allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "product-page" } } }
      ) {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    name
                    cover {
                        alt
                        image {
                            childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                            }
                            extension
                            publicURL
                        }
                        altProd
                        imageProd {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                            extension
                            publicURL
                        }
                    }
                    prod {
                        name
                        alt
                        image {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                            extension
                            publicURL
                        }
                        price
                    }
                }
            }
        }
    }
  }
`