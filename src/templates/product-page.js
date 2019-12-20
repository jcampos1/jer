import React from 'react'
import TemplateWrapper2 from '../components/Layout2'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getImage } from '../utils';

const Subitem = ({
    image,
    alt,
    title,
    price
}) => {
    return (
        <div
            className="mr-3">
            <img
                className="w-100 h-100" 
                src={image} alt={alt} />
            <span className="text-muted d-block">{title}</span>
            <div>
                <h5 className="d-inline text-muted font-weight-bold">$</h5>
                <h4 className="d-inline text-muted font-weight-bold">
                    {price}
                </h4>
            </div>
        </div>
    )
}

const SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
          breakpoint: 300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
        }
    ]
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
                            <a href={`#${item.node.frontmatter.name}`}>
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
                            </a>
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
                            <Slider {...SETTINGS}>
                            {
                                    item.node.frontmatter.prod.map((sub, index2) => (
                                        <Subitem 
                                            key={`prod${index}${index2}`}
                                            image={getImage(sub)}
                                            alt={sub.alt}
                                            title={sub.title}
                                            price={sub.price} />
                                    ))
                                }
                            </Slider>
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