import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import SocialNetworks from '../components/SocialNetworks'
import ButtonMore from '../components/ButtonMore';
import { graphql } from 'gatsby';

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
          className="shadow-sm blog-page jumbotron jumbotron-fluid p-0 m-0 position-relative">
            <img 
                style={{objectFit: "cover"}}
                className="img-fluid jumbo__cover w-100 position-relative"
                src={image}
                alt={alt} />
            <div
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
            </div>
        </section>
    )
}

const CircularPage = ({
    drName,
    networks,
    location,
    data
}) => {
    // const posts = data.allMarkdownRemark.edges;

    return (
        <TemplateWrapper2 location={location}>
            {/* {
                posts.map((item, index) => (
                    <div 
                        key={`post${index}`}
                        className="mb-3 mb-md-5">
                        <Post 
                            image={item.node.frontmatter.listImage.childImageSharp.fluid.src}
                            alt={item.node.frontmatter.altList}
                            title={item.node.frontmatter.title}
                            author={item.node.frontmatter.author.name}
                            date={item.node.frontmatter.date}
                            slug={item.node.fields.slug}
                            description={item.node.frontmatter.description} />
                    </div>
                ))
            } */}
            <>PÁGINA DE CIRCULAR</>
        </TemplateWrapper2>
    )
}

export default CircularPage;

// export const pageQuery = graphql`
//   query CircularPage {
//     allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "circular-post" } } }) {
//         edges {
//             node {
//                 fields {
//                     slug
//                 }
//                 frontmatter {
//                     title
//                     description
//                     author {
//                         name
//                     }
//                     date(formatString: "DD/MM/YYYY")
//                     listImage {
//                         childImageSharp {
//                             fluid {
//                                 ...GatsbyImageSharpFluid
//                             }
//                         }
//                       }
//                       altList
//                 }
//             }
//         }
//     }
//   }
// `