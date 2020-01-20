import React from 'react'
import { graphql } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import Presentation from '../components/Presentation'
import Comments from '../components/Comments'
import Procedures from '../pages/procedure';
import Educative from '../pages/educative/index';
import BlogSection from '../pages/blog/index';
import Contacts from '../components/Contacts'

export const LandingTemplate = ({
  isPreview = false,
  bannerTitle,
  bannerDescription,
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
            <span className="font-weight-bold">{bannerTitle}</span><br />
          </h1>
          <h3 className="font-weight-bold" style={{color: "#007387"}}>
            {bannerDescription}
          </h3>
          {/* <div
            className="cover__box__list">
            {
              charList.map((item, index) => (
                <div key={`charlist${index}`}>{item.name}</div>
              ))
            }
          </div> */}
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
        video={video} />

      {/* Features list: Ingles intensivo, etc */}
      <Comments 
        charList={charList} />

      {/* Proposals: Guarderia y jardin, etc */}
      {
        !isPreview && (
          <Educative />
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
    bannerDescription,
    charList,
    contacts ,
    video
  } = data.markdownRemark.frontmatter;

  return (
    <TemplateWrapper2 
      location={location}>
        <LandingTemplate 
          bannerTitle={bannerTitle}
          bannerDescription={bannerDescription}
          video={video.publicURL}
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
        bannerDescription
        video {
          publicURL
        }
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