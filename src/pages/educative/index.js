import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'gatsby';
import Feature2 from '../../components/Feature2';
import { graphql, StaticQuery } from 'gatsby';
import { getImage } from '../../utils';
import ButtonMore from '../../components/ButtonMore';

const Item = ({
    title,
    image,
    alt,
    description,
    to
}) => {
    return (
        <div className="item rounded">
            <img 
                src={image}
                alt={alt}
                className="img-fluid"
                style={{backgroundSize: "cover"}} />
            <div className="item__box border p-3">
                <h6 className="font-weight-bold d-none d-md-block text-uppercase">
                    {title}
                </h6>
                <h5 className="font-weight-bold d-block d-md-none text-uppercase">
                    {title}
                </h5>
                <hr />
                <p className="text-ellipsis">
                    {description}
                </p>
                <ButtonMore to={to} />
            </div>
        </div>
    )
}

const Educative = ({
    data
}) => {
    const proposals = data.allMarkdownRemark.edges;

    return (
        <section
            id="proposal"
            className="container-fluid m-0 px-0 position-relative pb-5">
            <div className="container">
                <div className="d-flex justify-content-center font-weight-bold py-3">
                    <Feature2 title="PROPUESTA DE FORMACIÓN INTEGRAL" />
                </div>
                <div className="d-none d-md-block">
                    <div className="row mt-5 pb-4">
                        {
                            proposals.map((item, index) => {
                                return (
                                    <div
                                        key={`prop${index}`} 
                                        className="col-md-4">
                                        <Item 
                                            image={getImage(item.node.frontmatter.thumbnail)}
                                            title={item.node.frontmatter.title}
                                            description={item.node.frontmatter.resume}
                                            to={item.node.fields.slug} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Displayed in mobile */}
                <Carousel className="d-block d-md-none" showStatus={false} showThumbs={false} emulateTouch>
                    {
                        proposals.map((item, index) => (
                            <div
                                style={{backgroundColor: "transparent"}} 
                                className="row px-3 px-sm-5 px-md-0">
                                <div
                                    key={`prop${index}`} 
                                    className="col-md-4">
                                    <Item 
                                        image={getImage(item.node.frontmatter.thumbnail)}
                                        title={item.node.frontmatter.title}
                                        description={item.node.frontmatter.resume}
                                        to={item.node.fields.slug} />
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default props => (
    <StaticQuery
      query={graphql`
        query EducativeQuery {
            allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "educative-post" } } }
              ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            thumbnail {
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
                            resume
                        }
                    }
                }
            }
        }
      `}
      render={(data, count) => <Educative data={data} count={count} {...props} />}
    />
  )