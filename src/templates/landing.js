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
  isPreview = false,
  bannerTitle,
  charList,
  video,
  contacts
}) => {
  return (
    <>
      <section
        id="jumbo" 
        className="cover jumbotron jumbotron-fluid p-0 m-0 position-relative">
        <div
          className="cover__box">
          <h1 className="mb-4">
              {bannerTitle}
          </h1>
          <div
            className="cover__box__list">
            {
              charList.map((item, index) => (
                <div key={`charlist${index}`}>{item.name}</div>
              ))
            }
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

      {/* About us */}
      <Presentation
        />

      {/* Features list: Ingles intensivo, etc */}
      <Comments 
        charList={charList} />

      {/* Proposals: Guarderia y jardin, etc */}
      {
        !isPreview && (
          <Products />
        )
      }

      {/* Blog */}
      {
        !isPreview && (
          <BlogSection />
        )
      }
      <Contacts 
        contacts={contacts} />
    </>
  )
};

const Landing = ({
  location,
  data
}) => {
  const { 
    bannerTitle,
    charList,
    contacts 
  } = data.markdownRemark.frontmatter;

  return (
    <TemplateWrapper2 
      location={location}>
        <LandingTemplate 
          bannerTitle={bannerTitle}
          charList={charList}
          contacts={contacts}
        />
    </TemplateWrapper2>
  )
}

export default Landing

export const pageQuery = graphql`
  query Landing {
    markdownRemark(frontmatter: { templateKey: { eq: "landing" } }) {
      frontmatter {
        bannerTitle
        charList {
          charImage {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL 
            }
            alt
          }
          description
          name
        }
        contacts {
          address
          email
          phones {
            phone
          }
        }
        networks {
          twitter
          instagram
          youtube
          facebook
        }
      }
    }
  }
`