import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import SocialNetworks from '../components/SocialNetworks'
import ButtonMore from '../components/ButtonMore';
import { graphql } from 'gatsby';

const data = {
    section1: {
        description: "",
        image: {image: "/img/admission.png", alt: "sdsdsd"},
        ejes: [{title: "Desarrollo integral del estudiante"}, {title: "La excelencia académica "}]
    },
    section2: {
        image: {image: "/img/admission2.png", alt: "sdsdsd"},
        items: [{
            title: "Horario de clases:",
            description: "lunes a viernes de 7:30 a.m. a 3:00 p.m."
        }, {
            title: "Tamaño de grupos",
            description: null,
            lst: [{
                title: "Preescolar 15 estudiantes por grupo."
            }, {
                title: "Primaria, máximo 20 estudiantes por grupo."
            }, {
                title: "Bachillerato, máximo 25 estudiantes por grupo."
            }]
        }, {
            title: "Actividades lúdicas deportivas",
            description: "Fútbol, voleibol y tenis."
        }, {
            title: "Actividades lúdicas artísticas",
            description: "Música, teatro, artes plásticas, clases de cocineritos (preescolar y primaria)."
        }, {
            title: "Uniformes escolares",
            description: "Utilizamos dos (2) uniformes, uno de diario y otro de deportes. Los uniformes los pueden ubicar en el Almacén Disgonal, C.C. Cedritos, local 2002.  "
        }]
    },
    section3: {
        image: {image: "/img/admission3.png", alt: "sdsdsd"},
        title: "Jardín infantil y preescolar",
        items: [{
            title: "Peekaboo",
            description: null,
            lst: [{
                title: "Guardería (1 año y medio a 2 años)"
            }, {
                title: "Párvulos (2 a 3 años)"
            }]
        }, {
            title: "Educación formal",
            description: null,
            lst: [{
                title: "Pre- Jardín (3 a 4 años)"
            }, {
                title: "Jardín (4 a 5 años)"
            },{
                title: "Transición (5 a 6 años)"
            }]
        }, {
            title: "Primaria",
            description: "(1ero a 5to grado)",
        }, {
            title: "Secundaría",
            description: "(6to a 9no grado)",
        },{
            title: "Media o Bachillerato",
            description: "(10mo a 11vo grado)",
        }]
    }
}

export const AdmissionPageTemplate = ({
    section1,
    section2,
    section3
}) => {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center mb-3 mt-md-3">
                    <Feature2 title="Admisión" />
                </div>
                <div className="row">
                    <div className="col-lg-6 px-3 px-lg-5 d-flex flex-column justify-content-center">
                        <p>
                            José Eustacio Rivera es un colegio privado bilingüe y campestre de calendario A, con resultados ICFES muy superior (A+), que está ubicado en la Calera, Bogotá y que lleva casi 60 años de trayectoria educando a los niños en la felicidad y la autoestima mediante una educación personalizada. (ver más).
                        </p>
                        <p>
                            Nuestra propuesta pedagógica se basa en una educación con sentido y alegría, y esta, a su vez, está basada en dos ejes:
                        </p>
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
            <section
                style={{backgroundColor: "#1592e6", zIndex:"-1"}} 
                className="container-fluid m-0 px-0 py-5 d-none d-md-block mt-5 position-relative">
                <div className="container">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2
                            style={{color: "white"}} 
                            title="Oferta educativa"
                            primaryColor="#D8E500"
                            secondaryColor="white" />
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
        </>
    )
}

const AdmissionPage = ({
    location,
    // data
}) => {

    return (
        <TemplateWrapper2 location={location}>
            <AdmissionPageTemplate 
                section1={data.section1}
                section2={data.section2}
                section3={data.section3} />
        </TemplateWrapper2>
    )
}

export default AdmissionPage;