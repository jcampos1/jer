import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import ButtonMore from '../components/ButtonMore'

const BlogPost2 = ({
    drName,
    networks,
    location,
    post,
    data
}) => {
    console.log('data blog post 2:', data);
    const {altCover, date, title, author} = data.markdownRemark.frontmatter;
    const image = data.markdownRemark.frontmatter.coverImage.childImageSharp.fluid.src;

    return (
    <TemplateWrapper2 location={location}>
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
                    <div className="d-flex align-items-center text-muted mx-auto mx-md-0">
                        <img 
                            className="icon-meta"
                            src="/img/icon-date.svg"
                            alt="icon date" />
                            {/* 2h ago */}
                            {date}
                    </div>
                    <div className="d-flex align-items-center text-muted mx-auto mx-md-0">
                        <img 
                            className="icon-meta"
                            src="/img/icon-author.svg"
                            alt="icon author" />
                            {author.name}
                    </div>
                    <div className="text-muted mt-5">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit cursus cubilia morbi nascetur, maecenas libero vehicula mauris litora sem phasellus fermentum vitae nisi. Tristique augue eleifend potenti congue senectus fermentum vehicula malesuada nullam ante pellentesque posuere lobortis, inceptos consequat venenatis libero lacus penatibus pharetra tempor pretium eros aliquet viverra, primis orci vulputate nascetur platea placerat morbi integer ad accumsan quam quis.
                        </p>
                        <p>
                            Cursus tempor natoque risus nisi conubia vitae fringilla proin, velit tortor pharetra eu viverra litora. Etiam suscipit pharetra dictum ridiculus odio hendrerit pellentesque sapien sollicitudin magna, montes vivamus maecenas posuere vel integer varius id potenti, euismod nibh parturient diam phasellus erat dapibus sociosqu quisque. Ullamcorper faucibus litora laoreet non duis ut nascetur nunc, felis massa phasellus tincidunt bibendum varius porta, mollis eu hac nullam posuere vulputate eget. Odio praesent duis pellentesque tempor orci semper sodales lobortis, integer inceptos mattis mus nibh netus pulvinar natoque suscipit, leo felis ullamcorper montes cubilia a fermentum.
                        </p>
                    </div>
                </div>
            </section>
            {/* <section className="container-fluid bg-light">
                <div className="d-flex justify-content-center font-weight-bold">
                    <Feature2 title="MÁS BLOGS" />
                </div>
                <div className="container py-5">
                    <div className="row">
                        {
                            post.map((p, index) => (
                                <div
                                    key={`post${index}`} 
                                    className="col-lg-6 mb-5 mb-lg-0 d-flex flex-column align-items-center">
                                    <img 
                                        className="shadow-sm w-100"
                                        src={p.image}
                                        alt="blog" />
                                    <div className="d-block px-2 mr-auto">
                                        <h5 className="text-muted font-weight-bold my-4">Lorem ipsum dolor sit amet</h5>
                                        <div className="d-flex align-items-center text-muted">
                                            <img 
                                                className="icon-meta"
                                                src="/img/icon-author.svg"
                                                alt="icon author" />
                                                {p.author}
                                        </div>
                                        <div className="d-flex align-items-center text-muted mt-4">
                                            <img 
                                                className="icon-meta"
                                                src="/img/icon-date.svg"
                                                alt="icon date" />
                                                {p.date}
                                        </div>
                                        <div className="mt-5">
                                            <ButtonMore />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </section> */}
        </div>
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
  }
`