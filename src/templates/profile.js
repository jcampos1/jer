import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import SocialNetworks from '../components/SocialNetworks'
import ButtonMore from '../components/ButtonMore';

const Profile = ({
    drName,
    // networks,
    location,
    data
}) => {
    const { alt, altMobile, networks } =  data.markdownRemark.frontmatter;
    const image = data.markdownRemark.frontmatter.image.childImageSharp.fluid.src;
    const imageMobile = data.markdownRemark.frontmatter.imageMobile.childImageSharp.fluid.src;

  return (
    <TemplateWrapper2 location={location}>
        <section
          id="profile" 
          className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
            <img 
                style={{objectFit: "cover", height: "fit-content"}}
                className="img-fluid jumbo__cover w-100 position-relative d-none d-md-block"
                src={image}
                alt={alt} />
            <img 
                style={{objectFit: "cover"}}
                className="img-fluid jumbo__cover w-100 position-relative d-md-none"
                src={imageMobile}
                alt={altMobile} />
            <div
                className="profile__content">
                <Feature2 
                    title={drName}
                    className=""
                    style={{color: "white"}} />
                <div
                    className="profile__content-text mt-0 mt-sm-2 mt-md-5">
                    <p className="mb-3 mb-md-5">
                        Soy cirujana plástica reconstructiva y estética, egresada de la Universidad Militar Nueva Granada de Bogotá y miembro de la Sociedad Colombiana de Cirugía Plástica. Estudié 6 años medicina general y un año de rural.
                    </p>
                    <p className="mb-3 mb-md-5">
                        Tengo 2 especializaciones, una en microcirugía en
                        el hospital Chang Gung memorial de Taiwán durante
                        1 año, y otra en cirugía plástica reconstructiva y
                        estética durante 4 años.
                    </p>
                    <p className="mb-3 mb-md-5">
                        Para mi han sido 12 años cambiando vidas de hombres 
                        y mujeres con reconstrucciones y microcirugías de 
                        gran complicación, así como con cirugías plásticas y estéticas necesarias para mejorar tanto la salud como la autoestima,
                        ambas áreas necesarias para lograr la mejor versión de cada persona.
                    </p>
                    <SocialNetworks 
                        networks={networks}
                        isSimple={false} />
                </div>
            </div>
        </section>
    </TemplateWrapper2>
  )
}

Profile.defaultProps = {
    drName: "Dra CAROLINA CARVAJAL",
    // networks: [{
    //     image: "/img/wathsapp.svg",
    //     name: "wathsapp",
    //     alt: "wathsapp web",
    //     url: "/"
    // },{
    //     image: "/img/instagram.svg",
    //     name: "instagram",
    //     alt: "instagram",
    //     url: "/"
    // },{
    //     image: "/img/youtube.svg",
    //     name: "youtube",
    //     alt: "youtube web",
    //     url: "/"
    // },{
    //     image: "/img/facebook.svg",
    //     name: "facebook",
    //     alt: "facebook web",
    //     url: "/"
    // }],
    // profilePicture: {
    //     image: "/img/carolina.png",
    //     alt: "perfil de carolina"
    // }
}

export default Profile

export const profilePageQuery = graphql`
  query ProfilePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        name
        image {
            childImageSharp {
              fluid(maxWidth: 1920) {
                ...GatsbyImageSharpFluid
              }
            } 
          }
          alt
        imageMobile {
            childImageSharp {
                fluid(maxWidth: 375) {
                ...GatsbyImageSharpFluid
                }
            } 
        }
        altMobile
        networks { 
            wathsapp
            instagram
            youtube
            facebook
          }
      }
    }
  }
`