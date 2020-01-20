import React from 'react'
import TemplateWrapper2 from '../components/Layout2'
import ItemCard from '../components/ItemCard'
import { graphql } from 'gatsby';
import Procedures from '../pages/procedure'

export const EducativePostTemplate = ({
    title,
    resume,
    title2,
    subtitle,
    description2
}) => {
  return (
    <>
      <section
        id="educative-post" 
        className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
        <div className="row">
            <div className="col-md-6 col-lg-5">
                <h1></h1>
            </div>
            <div className="col-md-6 col-lg-7">

            </div>
        </div>
      </section>
    </>
  )
}

const EducativePost = ({
    location,
    data
}) => {
    return (
        <TemplateWrapper2 location={location}>
          <EducativePostTemplate />
        </TemplateWrapper2>
    )
}

export default EducativePost;

export const EducativePostQuery = graphql`
  query EducativePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
`