import React from 'react'
import { graphql } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import Presentation from '../components/Presentation'
import Comments from '../components/Comments'
import Procedures from '../pages/procedure';
import Products from '../pages/product/index';
import BlogSection from '../pages/blog/index';
import Contacts from '../components/Contacts'

export const LandingTemplate = ({
  resumeProfile: profile, 
  testimonials,
  isPreview = false
}) => {
  return (
    <>
      <section
        id="jumbo" 
        className="cover jumbotron jumbotron-fluid p-0 m-0 position-relative">
        <div
          className="cover__box">
          <h1 className="mb-4">
              Una educación que no compara, que valora cada niño por sus capacidades y las estimula.
          </h1>
          <div
            className="cover__box__list">
            <div>Ingles intensivo</div>
            <div>Educación personalizada</div>
            <div>Excelentes resultados en pruebas saber</div>
          </div>
        </div>
        <img 
            className="jumbo__cover w-100 h-100 d-none d-md-block"
            src="/img/cover.png"
            alt="cover" />
          <img 
            className="jumbo__cover w-100 h-100 d-block d-md-none"
            src="/img/coverMobile.png"
            alt="cover" />
      </section>

      {/* Resume Info doctor */}
      <Presentation
        drName={profile.name}
        profilePicture={{
          image: profile.image.childImageSharp ? profile.image.childImageSharp.fluid.src : profile.image,
          alt: profile.alt
        }}
        networks={profile.networks}
        description={profile.description}
        />

      {/* Testimonials */}
      <Comments 
        testimonials={testimonials.slice(0, 3)} />

      {/* Products */}
      <Products />

      {/* Blog */}
      {
        !isPreview && (
          <BlogSection />
        )
      }
      <Contacts />
    </>
  )
};

const Landing = ({
  location,
  data
}) => {
  const { resumeProfile: profile, testimonials } = data.markdownRemark.frontmatter;

  return (
    <TemplateWrapper2 location={location}>
        <LandingTemplate 
          resumeProfile={profile} 
          testimonials={testimonials}
        />
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