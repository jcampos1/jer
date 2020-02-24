import React from 'react'
import { graphql } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import Presentation from '../components/Presentation'
import Characteristics from '../components/Characteristics'
import Procedures from '../pages/procedure';
import Educative from '../pages/educative/index';
import BlogSection from '../pages/blog/index';
import Contacts from '../components/Contacts'
import FormSection from '../components/FormSection'
import Feature from '../components/Feature'
import Testimonial from '../components/Testimonial'
import CarouselLogos from '../components/Carousel'
import { getImage } from '../utils';

const Divisor = () => (
  <div className="container-fluid bg-light py-3 py-md-4" />
)

export const LandingTemplate = ({
  isPreview = false,
  bannerTitle,
  bannerDescription,
  formName,
  lodging,
  webpage,
  spaces,
  charList,
  testimonials,
  carousel,
  video,
  contacts
}) => {
  return (
    <>
      <section
        id="jumbo" 
        className="cover jumbotron jumbotron-fluid p-0 m-0 position-relative">
        {/* BOX */}
        <div
          className="cover__box">
          <h2 className="font-weight-bold text-white">
            {bannerTitle}
          </h2>
          <p className="text-white">
            {bannerDescription}
          </p>
        </div>
        {/* FORM IN DESKTOP */}
        <div
          className="cover__form">
          <FormSection title={formName} />
        </div>
        {/* BANNER DESKTOP */}
        <img 
            className="jumbo__cover w-100 h-100 d-none d-md-block"
            src="/img/cover.png"
            alt="cover" />
        {/* BANNER MOBILE */}
        <img 
          className="jumbo__cover w-100 h-100 d-block d-md-none"
          src="/img/coverMobile.png"
          alt="cover" />
      </section>

      <div className="form-mobile bg-white">
        <FormSection />
      </div>

      <Divisor />

      {/* MY LODGING */}
      <div className="container-fluid bg-white py-4">
        <div className="container">
          <div className="row px-0 d-flex">
            <div className="col-md-7">
              <div className="d-block d-md-none">
                <Feature 
                  icon={lodging.icon.image}
                  alt={lodging.icon.alt}
                  title={lodging.title} />
              </div>
              <img 
                className="img-fluid"
                src={lodging.image}
                alt={lodging.alt} />
            </div>
            <div className="col-md-5 px-md-5 d-flex flex-column justify-content-center">
              <div className="d-none d-md-block">
                <Feature 
                  icon={lodging.icon.image}
                  alt={lodging.icon.alt}
                  title={lodging.title} />
              </div>
              <div className="font-weight-bold mt-3">
                {lodging.subtitle1}
              </div>
              <p className="text-muted">
                {lodging.text1}
              </p>
              <div className="font-weight-bold mt-3">
                {lodging.subtitle2}
              </div>
              <p className="text-muted">
                {lodging.text2}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Divisor />

      {/* MY WEB PAGE */}
      <div className="container-fluid bg-1 py-4">
        <div className="container">
          <div className="row px-0">
            <div className="col-md-5 px-md-5 d-flex flex-column justify-content-center">
              <Feature 
                icon={webpage.icon.image}
                alt={webpage.icon.alt}
                title={webpage.title}
                color="text-white"
                bg="bg-white" />
              <div className="d-block d-md-none">
                <img 
                  className="img-fluid"
                  src={webpage.image}
                  alt={webpage.alt} />
              </div>
              <div className="text-white">
                <div className="font-weight-bold mt-3">
                  {webpage.subtitle1}
                </div>
                <p>
                  {webpage.text1}
                </p>
                <div className="font-weight-bold mt-3">
                  {webpage.subtitle2}
                </div>
                <p>
                  {webpage.text2}
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="d-none d-md-block">
                <img 
                  className="img-fluid"
                  src={webpage.image}
                  alt={webpage.alt} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divisor />

      {/* SPACES */}
      <div className="container-fluid bg-white py-4">
        <div className="container">
          <div className="row px-0">
            <div className="col-md-7">
              <div className="d-block d-md-none">
                <Feature 
                  icon={spaces.icon.image}
                  alt={spaces.icon.alt}
                  title={spaces.title} />
              </div>
              <img 
                className="img-fluid"
                src={spaces.image}
                alt={spaces.alt} />
            </div>
            <div className="col-md-5 px-md-5 d-flex flex-column justify-content-center">
              <div className="d-none d-md-block">
                <Feature 
                  icon={spaces.icon.image}
                  alt={spaces.icon.alt}
                  title={spaces.title} />
              </div>
              <div className="font-weight-bold mt-3">
                {spaces.subtitle1}
              </div>
              <p className="text-muted">
                {spaces.text1}
              </p>
              <div className="font-weight-bold mt-3">
                {spaces.subtitle2}
              </div>
              <p className="text-muted">
                {spaces.text2}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Divisor />

      {/* CHARACTERISTIC */}
      <Characteristics 
        charList={charList} />

        <Divisor />

        <Testimonial testimonials={testimonials} />
      
      <Divisor />
      <CarouselLogos logos={carousel} />
      <Divisor />
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
    video,
    formName,
    lodging,
    webpage,
    spaces,
    testimonials,
    carousel,
    networks
  } = data.markdownRemark.frontmatter;

  console.log('contacts :', contacts);
  console.log('networks :', networks);

  const section1 = {
    ...lodging,
    icon: {
      ...lodging.icon,
      image: getImage(lodging.icon)
    },
    image: getImage(lodging)
  };

  const section2 = {
    ...webpage,
    icon: {
      ...webpage.icon,
      image: getImage(webpage.icon)
    },
    image: getImage(webpage)
  };

  const section3 = {
    ...spaces,
    icon: {
      ...spaces.icon,
      image: getImage(spaces.icon)
    },
    image: getImage(spaces)
  };

  const _charList = charList.map(cl => ({
    ...cl,
    charImage: {
      ...cl.charImage,
      image: getImage(cl.charImage)
    }
  }));

  const _testimonials = testimonials.map(test => ({
    ...test,
    photo: {
      ...test.photo,
      image: getImage(test.photo)
    },
    logo: {
      ...test.logo,
      image: getImage(test.logo)
    }
  }));

  const _carousel = carousel.map(ca => ({
    ...ca, 
    icon: {
      ...ca.icon,
      image: getImage(ca.icon)
    }
  }));

  return (
    <TemplateWrapper2 
      location={location}>
        <LandingTemplate 
          formName={formName}
          bannerTitle={bannerTitle}
          bannerDescription={bannerDescription}
          video={video.publicURL}
          charList={_charList}
          contacts={contacts}
          lodging={section1}
          webpage={section2}
          spaces={section3}
          testimonials={_testimonials}
          carousel={_carousel}
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
        formName
        lodging {
          title
          icon {
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
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL 
          }
          alt
          subtitle1
          text1
          subtitle2
          text2
        }
        webpage {
          title
          icon {
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
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL 
          }
          alt
          subtitle1
          text1
          subtitle2
          text2
        }
        spaces {
          title
          icon {
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
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL 
          }
          alt
          subtitle1
          text1
          subtitle2
          text2
        }
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
        testimonials {
          name
          charge
          photo {
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
          resume
          logo {
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
          ranking
          date(formatString: "DD/MM/YYYY")
        }
        carousel {
          icon {
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
          url
        }
        contacts {
          email
          phones {
            phone
          }
        }
        networks {
          whatsapp
          instagram
          youtube
          facebook
        }
      }
    }
  }
`