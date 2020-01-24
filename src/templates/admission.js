import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TemplateWrapper2 from '../components/Layout2'
import Feature2 from '../components/Feature2'
import SocialNetworks from '../components/SocialNetworks'
import ButtonMore from '../components/ButtonMore';
import { graphql } from 'gatsby';
import Services from '../pages/services'

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
    },
    section4: {
        steps: [{
            numImage: {
                image: "/img/one-green.svg",
                alt: "fdfd"
            },
            description: "Agenda una visita para conocer el colegio llamando a nuestro número 317 3724033"
        }, {
            numImage: {
                image: "/img/two-green.svg",
                alt: "fdfd"
            },
            description: "Diligencia el formulario de inscripción aquí (valor 65 mil pesos)."
        }, {
            numImage: {
                image: "/img/three-green.svg",
                alt: "fdfd"
            },
            description: "Asiste a la entrevista familiar con el formulario de inscripción"
        }, {
            numImage: {
                image: "/img/four-green.svg",
                alt: "fdfd"
            },
            description: "Al dia siguiente de la entrevista te enviamos la cart de respuesta vía email"
        }]
    },
    section5: {
        steps: [{
            numImage: {
                image: "/img/one-white.svg",
                alt: "fdfd"
            },
            description: "Una vez admitido debes cancelar la matrícula consignando en el Banco Av. Villas, CUENTA DE AHORRO #030 058 085, a nombre del Colegio José Eustacio Rivera."
        }, {
            numImage: {
                image: "/img/two-white.svg",
                alt: "fdfd"
            },
            description: "Entrega de los documentos completos del estudiante."
        }, {
            numImage: {
                image: "/img/three-white.svg",
                alt: "fdfd"
            },
            description: "Firma de matrícula con Rectoría."
        }]
    },
    section6: {
        costs: [{
            image: {
                image: "/img/matricula.svg",
                alt: "fdfd"
            },
            title: "Matricula"
        },{
            image: {
                image: "/img/service2.svg",
                alt: "fdfd"
            },
            title: "Transporte"
        },{
            image: {
                image: "/img/service1.svg",
                alt: "fdfd"
            },
            title: "Alimento"
        },{
            image: {
                image: "/img/pension.svg",
                alt: "fdfd"
            },
            title: "Pensión"
        }]
    }
}

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
            style={{border: "4px solid #d8e500", borderRadius: "1.2rem"}} 
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
            style={{border: "4px solid #31404b", borderRadius: "1.2rem"}} 
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
                            <small>
                                1. Tres (3) fotografías 3x4 marcadas por detrás con el nombre del estudiante y grado a cursar.
                            </small>
                            <small>2. Registro civil de nacimiento legible.</small>
                            <small>3. Fotocopia del documento de identidad ampliada al 150 %.</small>
                            <small>4. Tarjeta de identidad si el estudiante ya cumplió 7 años de edad, y cédula de ciudadanía o contraseña si ya es mayor de edad. </small>
                            <small>4. Tarjeta de identidad si el estudiante ya cumplió 7 años de edad, y cédula de ciudadanía o contraseña si ya es mayor de edad.</small>
                            <small>5. Fotocopia del carnet de la EPS o certificación de afiliación del estudiante.</small>
                            <small>6. Fotocopia de las cedulas de los padres del estudiante, ampliadas al 150 %.</small>
                            <small>7. Certificado médico menor a 30 días de expedido.</small>
                            <small>8. Esquema de vacunas (preescolar y primaria).</small>
                            <small>9. Paz y salvo por todo concepto, expedido por el colegio anterior.</small>
                            <small>10. Constancia de convivencia escolar.</small>
                            <small>11. Copia retiro de SIMAT.</small>
                            <small>12. Boletín final (niños desde transición hasta 5to grado).</small>
                            <small>13. Fotocopias pago matrícula y asociación de padres marcada con el nombre del estudiante y grado a cursar.</small>
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
    section6
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
                                title="Documentos para admisión"
                                image="/img/doc1.svg"
                                alt="fdfdf"
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
                                title="Documentos para matricula"
                                image="/img/doc2.svg"
                                alt="fdfdf"
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
                                <p className="color-white mb-0">
                                    <span className="font-weight-bold">Nota: </span>
                                    Los anteriores documentos reposarán en la secretaría académica como parte de la información histórica del estudiante, por tal motivo no se hará devolución de los mismos.
                                </p>
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
    // data
}) => {

    return (
        <TemplateWrapper2 location={location}>
            <AdmissionPageTemplate 
                section1={data.section1}
                section2={data.section2}
                section3={data.section3}
                section4={data.section4} 
                section5={data.section5} 
                section6={data.section6} 
                />
        </TemplateWrapper2>
    )
}

export default AdmissionPage;