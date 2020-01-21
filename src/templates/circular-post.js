import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import ButtonMore from '../components/ButtonMore'
import showdown from 'showdown';

const converter = new showdown.Converter()

export const CircularPostTemplate = ({
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
            <section className="d-flex flex-column flex-md-row container py-5">
                {/* AUTHOR IMAGE */}
                <div
                    className="mx-auto ml-md-0 mr-md-5 mb-4 mb-md-0 border-image border-image-frame rounded-circle d-flex justify-content-center align-items-center p-3" 
                    >
                    <img 
                        src="/img/author-image.png" 
                        alt="author image" />
                </div>
                <div className="d-flex flex-column">
                    <h2 className="mb-4 mx-auto mx-md-0 text-muted font-weight-bold">{title}</h2>
                    {
                        !isPreview && (
                            <div className="d-flex align-items-center text-muted mx-auto mx-md-0">
                                <img 
                                    className="icon-meta"
                                    src="/img/icon-date.svg"
                                    alt="icon date" />
                                    {date}
                            </div>
                        )
                    }
                    <div className="d-flex align-items-center text-muted mx-auto mx-md-0">
                        <img 
                            className="icon-meta"
                            src={author.photo.childImageSharp ? author.photo.childImageSharp.fluid.src : author.photo}
                            alt={author.alt} />
                            {author.name}
                    </div>
                    <div className="text-muted mt-5">
                        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(body) }} />
                        <div className="d-flex justify-content-center mt-5">
                            <a 
                                href="#"
                                className="btn btn-sm btn__custom-primary color-white py-2 px-5">
                                DESCARAGAR DESPRENDIBLE
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const CircularPost = ({
    location,
    data
}) => {
    const {altCover, date, title, author} = data.markdownRemark.frontmatter;
    
    const image = data.markdownRemark.frontmatter.coverImage.childImageSharp 
        ? data.markdownRemark.frontmatter.coverImage.childImageSharp.fluid.src
        : data.markdownRemark.frontmatter.coverImage;
        
    const body = data.markdownRemark.html;

    // const posts = data.allMarkdownRemark.edges;

    return (
    <TemplateWrapper2 location={location}>
        <CircularPostTemplate 
            altCover={altCover} 
            date={date} 
            title={title} 
            author={author} 
            image={image} 
            body={body}  />
    </TemplateWrapper2>
  )
}

export default CircularPost

export const CircularPostQuery = graphql`
  query CircularPostByID($id: String!) {
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
  }
`