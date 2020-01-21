import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import SocialNetworks from '../components/SocialNetworks'
import ButtonMore from '../components/ButtonMore';
import { graphql } from 'gatsby';
import { getImage } from '../utils';
import Paginator from '../components/Paginator'

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

export const CircularPageTemplate = ({
    posts
}) => {
    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <Feature2 title="Eventos del colegio" />
            </div>
            <p 
                style={{position: "relative", top: "-1rem"}}
                className="px-md-3 px-lg-5 m-lg-5 text-center">
                Aquí encontrarás información del Colegio José Esustacio Rivera, sobre sus eventos, ferias, entrega de boletines, salidas pedagógicas y recreativas, evaluaciones, asambleas de padres, etc.
            </p>
            <div className="row mt-5">
                {
                    posts.map((item, index) => (
                        <div 
                            key={`post${index}`}
                            className="col-md-4 mb-3 mb-md-5">
                            <Item 
                                image={getImage(item.node.frontmatter, "listImage")}
                                alt={item.node.frontmatter.altList}
                                title={item.node.frontmatter.title}
                                date={item.node.frontmatter.date}
                                to={item.node.fields.slug}
                                description={item.node.frontmatter.description} />
                        </div>
                    ))
                }
            </div>
        </div>  
    )
}
const CircularPage = ({
    location,
    data
}) => {
    const posts = data ? data.allMarkdownRemark.edges : [];
    const { totalCount } = data ? data.allMarkdownRemark : 1; 

    return (
        <TemplateWrapper2 location={location}>
            <CircularPageTemplate posts={posts} />
            <Paginator 
                totalItem={totalCount}
                location={location} />
        </TemplateWrapper2>
    )
}

export default CircularPage;

export const pageQuery = graphql`
  query CircularPage($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "circular-post" } } }
        limit: $limit
        skip: $skip
    ) {
        totalCount
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                    description
                    date(formatString: "DD/MM/YYYY")
                    listImage {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                      }
                      altList
                }
            }
        }
    }
  }
`