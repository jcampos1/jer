import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import Presentation from '../components/Presentation'
import Comments from '../components/Comments'
import Procedures from '../pages/procedure';
import Products from '../pages/product/index';
import BlogSection from '../pages/blog/index';

const Landing = ({
  location,
  data
}) => {
  const { resumeProfile: profile, testimonials } = data.markdownRemark.frontmatter;

  console.log('data :', data);
  return (
    <TemplateWrapper2 location={location}>
        <section
          id="jumbo" 
          className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
          <img 
              className="jumbo__cover w-100 h-100"
              src="/img/cover.png"
              alt="cover" />
        </section>

        {/* Resume Info doctor */}
        <Presentation
        ion 
          drName={profile.name}
          profilePicture={{
            image: profile.image.childImageSharp.fluid.src,
            alt: profile.alt
          }}
          networks={profile.networks}
          description={profile.description}
          />

        {/* Procedures */}
        <Procedures />

        {/* Testimonials */}
        <Comments 
          testimonials={testimonials.slice(0, 3)}/>

        {/* Products */}
        <Products />

        {/* Blog */}
        <BlogSection />
    </TemplateWrapper2>
  )
}

export default Landing

export const pageQuery = graphql`
  query Landing {
    markdownRemark(frontmatter: { templateKey: { eq: "landing" } }) {
      frontmatter {
        testimonials {
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            } 
          }
          alt
          resume
        }
        resumeProfile {
          name
          description
          networks { 
            wathsapp
            instagram
            youtube
            facebook
          }
          image {
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