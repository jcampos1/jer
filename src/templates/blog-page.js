import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import SocialNetworks from '../components/SocialNetworks'
import ButtonMore from '../components/ButtonMore';
import { graphql } from 'gatsby';
import { getImage } from '../utils';

const Post = ({
    image,
    alt,
    title,
    author,
    date,
    slug,
    description
}) => {
    return (
        <section
          className="blog-page jumbotron pt-0 jumbotron-fluid position-relative bg-white">
            <img 
                style={{objectFit: "cover"}}
                className="img-fluid jumbo__cover w-100 position-relative"
                src={image}
                alt={alt} />
            <div className="blog-page__content row px-3 pt-3 px-md-5 pt-md-5">
                <div className="col-md-2 mb-3 mb-md-0">
                    <img
                        src={author.image} alt={author.alt} className="img-fluid contorn rounded-circle d-flex mx-auto mx-md-0" />
                </div>
                <div className="col-md-10">
                    <h3 className="mb-3 font-weight-bold">{title}</h3>
                    <div className="d-flex flex-column flex-md-row">
                        <div className="d-flex align-items-center mr-3 mr-md-5">
                            <img 

                                className="icon-meta mr-2"
                                src="/img/icon-author.svg"
                                alt="icon author" />
                                <span className="text-muted">{author.name}</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <img 
                                className="icon-meta mr-2"
                                src="/img/icon-date.svg"
                                alt="icon author" />
                                <span className="text-muted">{date}</span>
                        </div>
                    </div>
                    <p className="text-muted mt-3">
                        {description}
                    </p>
                    <ButtonMore
                        isShowIcon={false} 
                        label="Seguir leyendo"
                        className="btn btn-info bg-1 border-0 px-4 color-white" to={slug} />
                </div>
            </div>
            {/* <div
                className="blog-page__content">
                <h1 className="color-white font-weight-bold text-center">
                    {title}
                </h1>
                <p className="color-white text-center d-none d-lg-block mt-lg-5">
                    {description}
                </p>
                <div className="mx-auto blog-page__content__meta p-2 p-md-3 d-flex alignn-items-center justify-content-center bg-white mt-3 mt-md-5">
                    <div className="text-muted text-uppercase mr-3 mr-md-5">
                        <img 
                            className="icon-meta"
                            src="/img/icon-author.svg"
                            alt="icon author" />
                            <span style={{color: "blue"}}>{author}</span>
                    </div>
                    <div className="text-muted">
                        <img 
                            className="icon-meta"
                            src="/img/icon-date.svg"
                            alt="icon author" />
                            <span style={{color: "blue"}}>{date}</span>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3 mt-md-5">
                    <ButtonMore
                        isShowIcon={false} 
                        className="btn btn-info font-weight-bold px-4 color-white" to={slug}/>
                </div>
            </div> */}
        </section>
    )
}

const BlogPage = ({
    location,
    data
}) => {
    const posts = data.allMarkdownRemark.edges;

    console.log('posts :', posts);
    return (
        <TemplateWrapper2 location={location}>
            <div className="container my-3 my-md-5 px-0 ">
                {
                    posts.map((item, index) => (
                        <div 
                            key={`post${index}`}
                            className="mb-3 mb-md-5">
                            <Post 
                                image={item.node.frontmatter.listImage.childImageSharp.fluid.src}
                                alt={item.node.frontmatter.altList}
                                title={item.node.frontmatter.title}
                                author={{
                                    name: item.node.frontmatter.author.name,
                                    image: getImage(item.node.frontmatter.author, "photo"),
                                    alt: item.node.frontmatter.author.alt
                                }}
                                date={item.node.frontmatter.date}
                                slug={item.node.fields.slug}
                                description={item.node.frontmatter.description} />
                        </div>
                    ))
                }
            </div>
        </TemplateWrapper2>
    )
}

export default BlogPage;

export const pageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "blog-post" } } }) {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                    description
                    author {
                        name
                        photo {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        alt
                    }
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