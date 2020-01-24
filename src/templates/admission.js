import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import SocialNetworks from '../components/SocialNetworks'
import ButtonMore from '../components/ButtonMore';
import { graphql } from 'gatsby';
import Services from '../pages/services'
import { getImage } from '../utils';
import showdown from 'showdown';

const converter = new showdown.Converter()

const stepsStyles = {
    width: "60px",
    height: "60px",
    position: "absolute",
    left: "-2rem"
}

const StepAdmission = ({
    image, alt, description
}) => {
    return (
        <div
            style={{border: "4px solid #d8e500", borderRadius: "1.2rem", fontSize: ".8rem"}} 
            className="d-flex align-items-center pl-5 pr-3 py-3 color-white h-100 position-relative">
            <img 
                src={image} 
                alt={alt} 
                style={stepsStyles} />
            {description}
        </div>
    )
}

const StepMatri = ({
    image, alt, description
}) => {
    return (
        <div
            style={{border: "4px solid #31404b", borderRadius: "1.2rem", fontSize: ".8rem"}} 
            className="d-flex align-items-center pl-5 pr-3 py-3 h-100 position-relative">
            <img 
                src={image} 
                alt={alt} 
                style={stepsStyles} />
            {description}
        </div>
    )
}

const Document = ({
    title,
    image,
    alt,
    content,
    backgroundPrimary,
    backgroundSecondary,
    doc = "1",
    toggle,
    isOpenDocs1,
    isOpenDocs2
}) => {
    return (
        <div className="text-center">
            <div className="position-relative d-inline-block">
                <img 
                    src={image}
                    alt={alt}
                    className="img-fluid rounded-circle"
                    style={{zIndex: "1000"}} />
                <div
                    style={{backgroundColor: backgroundSecondary}} 
                    className="photo-frame-serv border position-absolute rounded-circle" />
            </div>
            <div
                className="document font-weight-bold mb-2 my-3 position-relative mt-3">
                <button
                    onClick={toggle}
                    style={{zIndex: "10000", backgroundColor: backgroundPrimary}} 
                    className="btn btn-lg color-white rounded-pill px-5 w-100 position-relative">
                    {title}
                </button>
                <img 
                    width="40"
                    height="40"
                    src="/img/help.svg"
                    alt="help"
                    className="position-absolute"
                    style={{zIndex: "10000", left: "-1rem", top: ".5rem"}} />
                {
                    ((doc === "1" && isOpenDocs1) || (doc === "2" && isOpenDocs2)) && (
                        <div
                            style={{
                                backgroundColor: backgroundSecondary
                            }} 
                            className="document__box pb-4 px-4 w-100 text-left d-flex flex-column">
                            <div
                                style={{fontSize: ".7rem", lineHeight: "1.4"}} 
                                dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }} />
                            <button    
                                onClick={toggle}
                                className="btn btn-sm rounded-pill bg-white mx-auto px-3" 
                                >
                                Cerrar
                                </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export const AdmissionPageTemplate = ({
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7
}) => {
    const [isOpenDocs1, setIsOpenDocs1] = useState(false);
    const [isOpenDocs2, setIsOpenDocs2] = useState(false);

    const toggleDoc1 = () => {
        if(!isOpenDocs1 && isOpenDocs2) 
            setIsOpenDocs2(false);
        setIsOpenDocs1(!isOpenDocs1);
    }

    const toggleDoc2 = () => {
        if(!isOpenDocs2 && isOpenDocs1) 
            setIsOpenDocs1(false);
        setIsOpenDocs2(!isOpenDocs2);
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center mb-3 mt-md-3">
                    <Feature2 title="Admisión" />
                </div>
                <div className="row">
                    <div className="col-lg-6 px-3 px-lg-5 d-flex flex-column justify-content-center">
                        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(section1.description) }} />
                        {
                            section1.ejes.map((item, index) => (
                                <div 
                                    key={`eje${index}`}
                                    className="d-flex align-items-center justify-content-between font-weight-bold mb-2">
                                    <span className="mr-3">{index +1}.{" "}{item.title}</span>
                                    <ButtonMore 
                                        to="/admission"
                                        isShowIcon={false}  
                                        inlineStyles={{color: "white", backgroundColor: "#94c11f", border: "0"}} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-lg-6 px-5 mt-3 mt-lg-0">
                        <div className="position-relative">
                            <img 
                                src={section1.image.image} 
                                alt={section1.image.alt}
                                className="img-fluid" />
                            <div className="photo-frame border position-absolute" />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-3 mt-5">
                    <Feature2 title="Datos del colegio" />
                </div>
                <div className="row">
                    <div className="col-lg-6 px-5">
                        <div className="position-relative">
                            <img 
                                src={section2.image.image} 
                                alt={section2.image.alt}
                                className="img-fluid" />
                            <div className="photo-frame border position-absolute" />
                        </div>
                    </div>
                    <div className="col-lg-6 px-3 px-lg-5 d-flex flex-column justify-content-center mt-5 mt-lg-0">
                        {
                            section2.items.map((item, index) => (
                                <div 
                                    key={`sect2item${index}`}
                                    className="mb-3">
                                    <div className="font-weight-bold">{item.title}</div>
                                    {
                                        item.description && (
                                            <div>{item.description}</div>
                                        )
                                    }
                                    {
                                        item.lst && (
                                            item.lst.map(({title}, index) => (
                                                <div className="d-flex align-items-center">
                                                    <span className="bullet-point mr-2" />
                                                    {title}
                                                </div>
                                            ))
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* EDUCATIVE OFFERT */}
            <section 
                className="container-fluid m-0 px-0 py-5 mt-5 position-relative">
                <img 
                    style={{zIndex: "-100", top: "0", left: "0"}}
                    src="/img/bg-service.png"
                    alt="product bg"
                    className="w-100 h-100 position-absolute"
                    />
                <div className="container">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2
                            style={{color: "white"}} 
                            title="Oferta educativa"
                            primaryColor="#D8E500"
                            secondaryColor="white" />
                    </div>
                    <div className="row">
                        <div className="col-12 px-3 px-lg-5">
                            <div
                                style={{color: "#95c11f"}}
                                className="font-weight-bold">{section3.title}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 px-3 px-lg-5 d-flex flex-column justify-content-center">
                            {
                                section3.items.map((item, index) => (
                                    <div 
                                        key={`sect3item${index}`}
                                        className="mb-3">
                                        <div
                                            style={{color: "#95c11f"}}
                                            className="font-weight-bold">{item.title}</div>
                                        {
                                            item.description && (
                                                <div className="color-white">{item.description}</div>
                                            )
                                        }
                                        {
                                            item.lst && (
                                                item.lst.map(({title}, index) => (
                                                    <div className="d-flex align-items-center color-white">
                                                        <span
                                                            style={{backgroundColor: "#95c11f"}} 
                                                            className="bullet-point mr-2" />
                                                        {title}
                                                    </div>
                                                ))
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-lg-6 px-5 mt-3 mt-lg-0">
                            <div className="position-relative">
                                <img 
                                    src={section3.image.image} 
                                    alt={section3.image.alt}
                                    className="img-fluid" />
                                <div className="photo-frame border position-absolute" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* SERVICES */}
            <Services />

            {/* ADMISSION PROCESS */}
            <section 
                className="container-fluid m-0 px-0 py-5 position-relative">
                <img 
                    style={{zIndex: "-100", top: "0", left: "0"}}
                    src="/img/bg-service.png"
                    alt="product bg"
                    className="w-100 h-100 position-absolute"
                    />
                <div className="container">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2
                            style={{color: "white"}} 
                            title="Proceso de admisión"
                            primaryColor="black"
                            secondaryColor="#d8e500" />
                    </div>
                    <div
                        style={{height: "160px"}} 
                        className="row">
                        {
                            section4.steps.map((item, index) => (
                                <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 h-100 pl-4">
                                    <StepAdmission
                                        image={item.numImage.image}
                                        alt={item.numImage.alt} 
                                        description={item.description} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* ADMISSION PROCESS */}
            <section 
                className="container-fluid m-0 px-0 py-5 position-relative mt-5">
                <img 
                    style={{zIndex: "-100", top: "0", left: "0"}}
                    src="/img/bg-service2.png"
                    alt="product bg"
                    className="w-100 h-100 position-absolute d-none d-md-block"
                    />
                <div className="container">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2
                            title="Proceso de matricula"
                            primaryColor="white"
                            secondaryColor="black" />
                    </div>
                    <div
                        style={{height: "160px"}} 
                        className="row">
                        {
                            section5.steps.map((item, index) => (
                                <div className="col-sm-6 col-md-4 h-100 pl-4">
                                    <StepMatri
                                        image={item.numImage.image}
                                        alt={item.numImage.alt}
                                        description={item.description} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* DOCUMENTS ECONOMICS */}
            <section 
                style={{zIndex: "auto"}}
                className="container-fluid m-0 px-0 py-5 position-relative bg-light">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <Feature2 title="Documentos economicos" />
                    </div>
                    <div className="row">
                        <div
                            style={{zIndex: "1000"}} 
                            className="col-lg-6 mt-3">
                            <Document 
                                title={section7.admission.title}
                                image={section7.admission.image.image}
                                alt={section7.admission.image.alt}
                                content={section7.admission.content}
                                backgroundPrimary="rgb(4, 116, 135)"
                                backgroundSecondary="#88C7D2"
                                toggle={toggleDoc1}
                                isOpenDocs1={isOpenDocs1}
                                isOpenDocs2={isOpenDocs2}
                                doc="1"
                                 />
                        </div>
                        <div
                            style={{zIndex: "1000"}}  
                            className="col-lg-6 mt-3">
                            <Document 
                                title={section7.matri.title}
                                image={section7.matri.image.image}
                                alt={section7.matri.image.alt}
                                content={section7.matri.content}
                                backgroundPrimary="#95c11f"
                                backgroundSecondary="#D1EF81"
                                toggle={toggleDoc2}
                                isOpenDocs1={isOpenDocs1}
                                isOpenDocs2={isOpenDocs2}
                                doc="2"
                                 />
                        </div>
                    </div>
                    <div 
                        className="row py-3 py-md-4 px-3 px-lg-5 mx-auto cost-note mt-5">
                            <div className="col-md-4 col-lg-3 d-flex align-items-center">
                                <img 
                                    src="/img/alert.svg" 
                                    alt="dffdfd" 
                                    className="img-fluid"
                                    width="70"
                                    height="70" />
                            </div>
                            <div className="col-md-8 col-lg-9 d-flex align-items-center">
                                <div
                                    className="color-white"
                                    dangerouslySetInnerHTML={{ __html: converter.makeHtml(section7.notes) }} />
                            </div>
                    </div>
                </div>
            </section>
            {/* EDUCATIVE COST */}
            <section 
                className="container-fluid m-0 px-0 py-5 position-relative">
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <Feature2 title="Costos educativos" />
                    </div>
                    <div className="row">
                        {
                            section6.costs.map((item, index) => (
                                <div 
                                    key={`cost${index}`}
                                    className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mt-5">
                                    <div className="d-flex flex-column justify-content-center">
                                        <div className="position-relative">
                                            <img 
                                                src={item.image.image}
                                                alt={item.image.alt}
                                                className="img-fluid rounded-circle"
                                                style={{zIndex: "1000"}} />
                                            <div className="photo-frame-serv border position-absolute rounded-circle" />
                                        </div>
                                        <div
                                            className="font-weight-bold mb-2 mx-auto my-3">
                                            {item.title}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <ButtonMore
                            label="Solicitar costos"
                            style={{color: "white", borderRadius: "18px"}}
                            isShowIcon={false} 
                            to="/" />
                    </div>
                </div>
            </section>
        </>
    )
}

const AdmissionPage = ({
    location,
    data
}) => {
    const { 
        section1: _section1, 
        section2: _section2, 
        section3: _section3, 
        section4: _section4, 
        section5: _section5, 
        section6: _section6,
        section7: _section7
    } = data.markdownRemark.frontmatter;

    console.log('data :', data);
    const section1 = {
        ..._section1,
        image: { 
            image: getImage(_section1.image),
            alt: _section1.image.alt
        }
    };

    const section2 = {
        ..._section2,
        image: { 
            image: getImage(_section2.image),
            alt: _section2.image.alt
        }
    }

    const section3 = {
        ..._section3,
        image: { 
            image: getImage(_section3.image),
            alt: _section3.image.alt
        }
    }

    const section4 = {
        ..._section4,
        steps: _section4.steps.map(st => ({
            ...st,
            numImage: {
                ...st.numImage,
                image: getImage(st.numImage)
            }
        }))
    }

    const section5 = {
        ..._section5,
        steps: _section5.steps.map(st => ({
            ...st,
            numImage: {
                ...st.numImage,
                image: getImage(st.numImage)
            }
        }))
    }

    const section6 = {
        ..._section6,
        costs: _section6.costs.map(cs => ({
            ...cs,
            image: {
                ...cs.image,
                image: getImage(cs.image)
            }
        }))
    }

    const section7 = {
        ..._section7,
        admission: {
            ..._section7.admission,
            image: {
                ..._section7.admission.image,
                image: getImage(_section7.admission.image)
            }
        },
        matri: {
            ..._section7.matri,
            image: {
                ..._section7.matri.image,
                image: getImage(_section7.matri.image)
            }
        }
    }

    return (
        <TemplateWrapper2 location={location}>
            <AdmissionPageTemplate 
                section1={section1}
                section2={section2}
                section3={section3}
                section4={section4} 
                section5={section5} 
                section6={section6} 
                section7={section7}
                />
        </TemplateWrapper2>
    )
}

export default AdmissionPage;

export const pageQuery = graphql`
  query Admission {
    markdownRemark(frontmatter: { templateKey: { eq: "admission" } }) {
      frontmatter {
        section1 {
            description
            ejes {
                title
            }
            image {
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
        }

        section2 {
            image {
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
            items {
                title
                description
                lst {
                    title
                }
            }
        }

        section3 {
            title
            image {
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
            items {
                title
                description
                lst {
                    title
                }
            }
        }

        section4 {
            steps {
                description
                numImage {
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
            }
        }

        section5 {
            steps {
                description
                numImage {
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
            }
        }

        section6 {
            costs {
                title
                image {
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
            }
        }

        section7 {
            notes
            admission {
                title
                content
                image {
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
            }
            matri {
                title
                content
                image {
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
            }
        }
      }
    }
  }
`