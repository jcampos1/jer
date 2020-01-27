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

export const AboutUsTemplate = ({
}) => {
    return (
        <>
            {/* ABOUT US */}
            <div
                style={{zIndex: "-1"}} 
                className="container-fluid bg-1 position-relative py-3">
                <div className="d-flex justify-content-center mb-3 mt-md-3">
                    <Feature2
                        primaryColor="black"
                        secondaryColor="white"
                        title="Quienes somos" />
                </div>
                <div className="row pb-5">
                    <div className="col-lg-6 px-3 px-lg-5 d-flex flex-column justify-content-center">
                        <p>
                            Somos un colegio privado mixto, bilingüe y campestre, con casi 60 años de trayectoria, que se ha propuesto a educar a los niños y adolescentes en la felicidad y la autoestima mediante una educación personalizada. 
                        </p>
                        <p>
                            Nuestra propuesta pedagógica se basa en una educación con sentido y alegría. 
                        </p>
                        <p>
                            Buscamos que los estudiantes entiendan qué es lo que estudian y para qué, así los motivamos y logramos que el aprendizaje sea más efectivo. 
                        </p>
                        <p className="font-weight-bold">
                            A su vez, nuestra propuesta pedagógica está basada en dos ejes:
                        </p>
                    </div>
                    <div className="col-lg-6 px-5 mt-3 mt-lg-0">
                        <div className="position-relative">
                            <img 
                                src="/img/admission.png" 
                                alt="sddsfsdf"
                                className="img-fluid" />
                            <div className="photo-frame border position-absolute" />
                        </div>
                    </div>
                </div>
            </div>

            {/* DEVELOPMENT */}
            <div
                style={{zIndex: "-1"}} 
                className="container-fluid bg-light position-relative py-3">
                <div className="row mb-5">
                    <div className="col-lg-6 px-5">
                        <div className="position-relative">
                            <img 
                                src="/img/admission3.png" 
                                alt="fdfd"
                                className="img-fluid" />
                            <div className="photo-frame border position-absolute" />
                        </div>
                    </div>
                    <div className="col-lg-6 px-3 px-lg-5 d-flex flex-column justify-content-center mt-5 mt-lg-0">
                        <div className="d-flex align-items-center font-weight-bold">
                            <div 
                                style={{fontSize: "3rem"}}
                                className="mr-3">1</div>
                            <h2>Desarrollo integral del estudiante:</h2>
                        </div>
                        <p>
                            Para nosotros cada estudiante es único, tiene cosas que le gustan y cosas que se le dificultan más, por eso identificamos las destrezas y las áreas de mejora de cada uno de los estudiantes con el objetivo de potencializar las primeras y trabajar en las segundas. De esta forma evitamos que el estudiante le tome rechazo a las materias que se le dificultan. 
                        </p>
                        <p>
                            Para lograr esto combinamos distintas metodologías de enseñanza- aprendizaje que, aplicamos según el grupo de estudiantes de cada grado y de forma personalizada. 
                        </p>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-lg-6 px-3 px-lg-5 d-flex flex-column justify-content-center">
                        <h4 className="font-weight-bold mb-3">Contamos además con:</h4>
                        <div className="font-weight-bold">Comité de seguimiento</div>
                        <p>
                            Hacemos un seguimiento personalizado con cada uno de nuestros estudiantes desde que ingresan al JER. 
                        </p>
                        <p>
                            De manera periódica un equipo interdisciplinar se reúne para analizar las trayectorias estudiantiles y sociales de nuestros niños. Así, con ayuda de cada uno de sus maestros, el área de psicología y los directivos, determinamos las áreas en las que tiene mayores habilidades y destrezas. De esta manera eliminamos la presión que suelen tener algunos niños frente a ciertas asignaturas y exigimos un nivel más alto en las que sobresalen. 
                        </p>
                        <p>
                            Las reuniones de seguimiento permiten además adelantarse a problemas académicos o sociales que puedan presentarse y así evitarlos o darles una pronta solución
                        </p>
                    </div>
                    <div className="col-lg-6 px-5 mt-3 mt-lg-0">
                        <div className="position-relative">
                            <img 
                                src="/img/admission2.png" 
                                alt="sddsfsdf"
                                className="img-fluid" />
                            <div className="photo-frame border position-absolute" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ACADEMIC EXCELLENCE */}
            <section 
                className="container-fluid m-0 px-0 py-5 mt-5 position-relative">
                <img 
                    style={{zIndex: "-100", top: "0", left: "0"}}
                    src="/img/bg-service.png"
                    alt="product bg"
                    className="w-100 h-100 position-absolute"
                    />
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6 px-5 d-flex flex-column justify-content-center">
                            <div className="position-relative">
                                <img 
                                    src="/img/admission.png" 
                                    alt="fdfd"
                                    className="img-fluid" />
                                <div className="photo-frame border position-absolute" />
                            </div>
                        </div>
                        <div className="col-lg-6 px-3 px-lg-5 d-flex flex-column justify-content-center mt-5 mt-lg-0">
                            <div className="d-flex align-items-center font-weight-bold color-1">
                                <div 
                                    style={{fontSize: "3rem"}}
                                    className="mr-3">2</div>
                                <h2 className="font-weight-bold">La excelencia académica:</h2>
                            </div>
                            <p className="mb-3 text-white">
                                Para este segundo eje contamos con varias estrategias, una de ella es la educación por ciclos, debido a que los estudiantes tienen otra forma de aprender, existe una persona que los acompañará durante toda la primaria mientras se adaptan al colegio grande. El ciclo de primaria va de 2do a 5to grado, y el ciclo de bachillerato de 6to a 11vo grado. 
                            </p>
                            <h2 className="font-weight-bold color-1 my-4">Fundamentos para la excelencia académica:</h2>
                            <div className="font-weight-bold color-1 mb-3">Materia énfasis</div>
                            <p className="text-white">
                                Contamos con una materia que es el énfasis del colegio llamada Emprendimiento Empresarial. En ella los estudiantes trabajan a lo largo de todo el año en la creación de su propia empresa y luego, en el mes de septiembre, la presentan a toda la comunidad en la “Feria del Emprendimiento”.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {/* ENGLISH */}
                        <div className="col-md-3 d-flex align-items-center">
                            <div className="position-relative d-inline-block mx-auto mx-md-0">
                                <img 
                                    src="/img/ingles-green.svg"
                                    alt="dfdfdf"
                                    className="img-fluid rounded-circle"
                                    style={{zIndex: "1000"}} />
                                <div className="photo-frame-serv position-absolute rounded-circle" />
                            </div>
                        </div>
                        <div className="col-md-9 d-flex flex-column justify-content-center mt-3 mt-md-0">
                            <div className="font-weight-bold color-1 mb-3">
                                Bilingüismo
                            </div>
                            <p className="text-white">
                                Nuestros estudiantes verán inglés desde los primeros años de básica, por lo que van a terminar su bachillerato con un certificado en inglés de nivel B2 (del marco común europeo), esto quiere decir bilingües, y no tendrán que hacer un examen de nivelación en inglés para acceder a las mejores universidades del país.
                            </p>
                        </div>

                        {/* ICFES */}
                        <div className="col-md-3 d-flex align-items-center mt-3 mt-md-5">
                            <div className="position-relative d-inline-block mx-auto mx-md-0">
                                <img 
                                    src="/img/icfes-green.svg"
                                    alt="dfdfdf"
                                    className="img-fluid rounded-circle"
                                    style={{zIndex: "1000"}} />
                                <div className="photo-frame-serv position-absolute rounded-circle" />
                            </div>
                        </div>
                        <div className="col-md-9 d-flex flex-column justify-content-center mt-3 mt-md-0">
                            <div className="font-weight-bold color-1 mb-3">
                                Pruebas ICFES SABER 11 con clasificación A+
                            </div>
                            <p className="text-white">
                                El colegio José Eustasio Rivera se ha destacado siempre por los excelentes resultados en las pruebas ICFES SABER 11. En las últimas presentadas hemos conseguido la más alta calificación, A + (muy superior).
                            </p>
                            <p className="text-white">
                                En comparación, los resultados ICFES de nuestra institución se encuentran por encima del promedio de los establecimientos educativos colombianos y de los de la Entidad Territorial Certificada.
                            </p>
                        </div>

                        {/* PERFORMANCE */}
                        <div className="col-md-3 d-flex align-items-center mt-3 mt-md-5">
                            <div className="position-relative d-inline-block mx-auto mx-md-0">
                                <img 
                                    src="/img/desempeño-green.svg"
                                    alt="dfdfdf"
                                    className="img-fluid rounded-circle"
                                    style={{zIndex: "1000"}} />
                                <div className="photo-frame-serv position-absolute rounded-circle" />
                            </div>
                        </div>
                        <div className="col-md-9 d-flex flex-column justify-content-center mt-3 mt-md-0">
                            <div className="font-weight-bold color-1 mb-3">
                                Programa para estudiantes con alto desempeño académico
                            </div>
                            <p className="text-white">
                                Los estudiantes con desempeño académico sobresaliente pueden, desde el grado noveno, iniciar vía online sus estudios superiores y así al terminar 11vo no solo tendrán el titulo de bachiller sino también el de técnico y/o tecnólogo, con lo cual con solo un semestre adicional serán profesionales.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OTHER ACADEMIC EXCELLENCE */}
            <div
                style={{zIndex: "-1"}} 
                className="container-fluid bg-1 position-relative py-3">
                <div className="font-weight-bold text-white d-flex justify-content-center mb-5 mt-md-3">
                    Otros de nuestros fundamentos para la excelencia académica son:
                </div>
                <div className="row d-flex justify-content-center pb-5">
                    <div className="col-md-4 mt-0 mt-md-3">
                        <div className="d-flex justify-content-center mb-3">
                            <div className="position-relative d-inline-block">
                                <img 
                                    src="/img/us1.svg"
                                    alt="dfdfdf"
                                    className="img-fluid rounded-circle"
                                    style={{zIndex: "1000"}} />
                                <div className="photo-frame-serv position-absolute rounded-circle" />
                            </div>
                        </div>
                        <div className="text-center text-white font-weight-bold">
                            Hora de tareas en el colegio.  
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 mt-md-3">
                        <div className="d-flex justify-content-center mb-3">
                            <div className="position-relative d-inline-block">
                                <img 
                                    src="/img/us2.svg"
                                    alt="dfdfdf"
                                    className="img-fluid rounded-circle"
                                    style={{zIndex: "1000"}} />
                                <div className="photo-frame-serv position-absolute rounded-circle" />
                            </div>
                        </div>
                        <div className="text-white font-weight-bold text-center">
                            Olimpiadas de matemáticas.   
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 mt-md-3">
                        <div className="d-flex justify-content-center mb-3">
                            <div className="position-relative d-inline-block">
                                <img 
                                    src="/img/us3.svg"
                                    alt="dfdfdf"
                                    className="img-fluid rounded-circle"
                                    style={{zIndex: "1000"}} />
                                <div className="photo-frame-serv position-absolute rounded-circle" />
                            </div>
                        </div>
                        <div className="text-white font-weight-bold text-center">
                            Feria de ciencias.   
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 mt-md-3">
                        <div className="d-flex justify-content-center mb-3">
                            <div className="position-relative d-inline-block">
                                <img 
                                    src="/img/us4.svg"
                                    alt="dfdfdf"
                                    className="img-fluid rounded-circle"
                                    style={{zIndex: "1000"}} />
                                <div className="photo-frame-serv position-absolute rounded-circle" />
                            </div>
                        </div>
                        <div className="text-white font-weight-bold text-center">
                            Cuidado de granja  y huerta.   
                        </div>
                    </div>
                    <div className="col-md-4 mt-5 mt-md-3">
                        <div className="d-flex justify-content-center mb-3">
                            <div className="position-relative d-inline-block">
                                <img 
                                    src="/img/us5.svg"
                                    alt="dfdfdf"
                                    className="img-fluid rounded-circle"
                                    style={{zIndex: "1000"}} />
                                <div className="photo-frame-serv position-absolute rounded-circle" />
                            </div>
                        </div>
                        <div className="text-white font-weight-bold text-center">
                            Hora de lectura al aire libre.
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{zIndex: "-1"}} 
                className="container bg-light position-relative py-3">
                <div className="d-flex justify-content-center mb-3 mt-md-3">
                    <Feature2
                        title="Historia" />
                </div>
                <div className="row d-flex justify-content-center pb-5">
                    <div className="col-md-4">
                        <img 
                            src="/img/logo.svg"
                            alt="dfdfdf"
                            className="img-fluid" />
                    </div>
                    <div className="col-md-4 px-md-5">
                        <p>
                            El colegio José Eustasio Rivera fue fundado en Bogotá en el año 1960 por el sacerdote huilense Genaro Díaz Jordán, el licenciado Elías Zorrilla Gómez, y el señor Alfonso Silva Lozada. 
                        </p>
                        <p>
                            Con el propósito de fomentar e impartir enseñanza primaria y secundaria, se le dio ese nombre en honor al poeta, novelista, político y diplomático José Eustasio Rivera.
                        </p>
                        <p>
                            En el año 1977 se realizó el traspaso de la institución a los esposos Dr. Jaime Camacho Escobar y la  
                        </p>
                    </div>
                    <div className="col-md-4 px-md-5">
                        <p>
                            Doctora Alba Luz Medina Charry, quienes en 2005 adquirieron un predio de 24.000 m2 en el municipio de la Calera, lugar donde se traslado el colegio.
                        </p>
                        <p>
                            Desde el segundo semestre de 2017, la familia Hoyos Mejía se ha hecho responsable del colegio, implantando un modelo de educación personalizada basado en las experiencias de cada alumno, y, a la fecha (2020), se sigue manejando este modelo educativo.
                        </p>
                    </div>
                </div>
            </div>

                {/* <div className="d-flex justify-content-center mb-3 mt-5">
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
                </div> */}
        </>
    )
}

const AboutUs = ({
    location,
    data
}) => {
    return (
        <TemplateWrapper2 location={location}>
            <AboutUsTemplate 
                />
        </TemplateWrapper2>
    )
}

export default AboutUs;