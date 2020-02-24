import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import ButtonMore from '../components/ButtonMore'
import showdown from 'showdown';
import { getImage } from '../utils';

const converter = new showdown.Converter()

const Post = ({
    title,
    authorName,
    date,
    slug
}) => {
    const onPostClick = slug => 
        navigate(slug)

    return (
        <div 
            onClick={() => onPostClick(slug)}
            className="shadow-sm px-4 py-3 c-pointer bg-light">
            <div className="font-weight-bold">{title}</div>
            <div className="d-flex flex-column flex-md-row text-muted mt-3 mt-md-4">
                <div className="d-flex align-items-center mr-3">
                    <img width="15px" src="/img/icon-author.svg" alt="author icon" className="mr-2" />
                    <span>{authorName}</span>
                </div>
                <div className="d-flex align-items-center">
                    <img width="15px" src="/img/icon-date.svg" alt="date icon" className="mr-2" />
                    <span>{date}</span>
                </div>
            </div>
        </div>
    )
}

const ItemAuthor = ({
    image, 
    alt,
    title,
    name,
    date
}) => {
    return (
        <div className="shadow-sm bg-1 px-4 py-3">
            <div className="row">
                <div className="col-md-3 d-flex align-items-center mb-3 mb-md-0">
                    <div className="d-inline-block p-1 bg-white rounded-circle mx-auto mx-md-0">
                        <img 
                            className="img-fluid rounded-circle contorn"
                            src={image}
                            alt={alt} />
                    </div>
                </div>
                <div className="col-md-9 d-flex flex-column justify-content-center text-white">
                    <h3 className="font-weight-bold">
                        {title}
                    </h3>
                    <div className="d-flex flex-column flex-md-row text-white mt-3 mt-md-4">
                        <div className="d-flex align-items-center mr-3 mt-3 mt-md-0">
                            <img width="20px" src="/img/author-white.svg" alt="author icon" className="mr-2" />
                            <span>{name}</span>
                        </div>
                        <div className="d-flex align-items-center mt-3 mt-md-0">
                            <img width="20px" src="/img/date-white.svg" alt="date icon" className="mr-2" />
                            <span>{date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const BlogPost2Template = ({
    altCover, 
    date, 
    title, 
    author,
    image,
    body,
    isPreview = false
}) => {
    return (
        <div id="blog-post">
            <section
                className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
                <img 
                    className="img-fluid jumbo__cover w-100 position-relative shadow-sm"
                    src={image}
                    alt={altCover} />
            </section>
            <div className="container bg-white blog-post__container">
                <div
                    className="blog-post__author-content mx-auto">
                    <ItemAuthor 
                        image={getImage(author, "photo")} 
                        alt={author.alt} 
                        title={title}
                        name={author.name}
                        date={date} />
                </div>
                <div
                    className="position-relative p-3 p-md-5 blog-post__body" dangerouslySetInnerHTML={{ __html: converter.makeHtml(body) }} />
            </div>
            <div
                style={{top: "-1.5rem", overflow: "hidden"}} 
                className="container px-0 mb-5 position-relative">
                <img
                    style={{zIndex: "-1"}} 
                    src="/img/bg-autor-blog.png" alt="background post" className="" />
                <div  className="blog-post__author">
                    <div className="row">
                        <div 
                            className="col-md-6 d-none d-md-block">
                            <img
                                style={{
                                    height: "568px",
                                    position: "relative",
                                    left: "6rem",
                                    bottom: "-1.5rem"
                                }}
                                src="/img/modelo-author-blog.png" alt="background post" />
                        </div>
                        <div className="col-md-6 text-white d-flex flex-column justify-content-center">
                            <div style={{paddingLeft: "3.5rem"}}>
                                <h2 className="mb-4 mb-md-2">{author.name}</h2>
                                <div>Cargo actual</div>
                            </div>
                            <div className="d-flex mt-5">
                                <img
                                    width="35px"
                                    src="/img/comillas-open.svg" alt="background post" className="align-self-start mr-4" />
                                <p style={{width: "200px"}}>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                                </p>
                                <img
                                    width="35px"
                                    src="/img/comillas-close.svg" alt="background post" className="align-self-end ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const BlogPost2 = ({
    location,
    data
}) => {
    const {altCover, date, title, author} = data.markdownRemark.frontmatter;
    console.log('data :', data);
    const posts = data.allMarkdownRemark.edges;

    const image = data.markdownRemark.frontmatter.coverImage.childImageSharp 
        ? data.markdownRemark.frontmatter.coverImage.childImageSharp.fluid.src
        : data.markdownRemark.frontmatter.coverImage;
        
    const body = data.markdownRemark.html;

    // const posts = data.allMarkdownRemark.edges;

    return (
    <TemplateWrapper2 location={location}>
        <>
            <BlogPost2Template 
                altCover={altCover} 
                date={date} 
                title={title} 
                author={author} 
                image={image} 
                body={body}  />
            <div className="container bg-white py-3 px-5 mb-5">
                <div>
                    <h2 className="color-1 text-center mb-0">Más blogs</h2>
                    <hr className="bg-1 mt-1" style={{width: "250px"}} />
                </div>
                <div className="row">
                    {
                        posts.map((item, index) => (
                            <div className="col-md-6 mt-4">
                                <Post 
                                    title={item.node.frontmatter.title} 
                                    authorName={item.node.frontmatter.author.name}
                                    date={item.node.frontmatter.date}
                                    slug={item.node.fields.slug}
                                    />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    </TemplateWrapper2>
  )
}

export default BlogPost2

export const blogpost2Query = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        coverImage {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        altCover
        title
        date(formatString: "DD/MM/YYYY")
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
      }
    }

    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
                author {
                    name
                }
            }
          }
        }
      }
  }
`