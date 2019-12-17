import React, { useState, useEffect } from 'react'
import Feature2 from './Feature2';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ButtonMore from './ButtonMore';
import { Link, graphql, StaticQuery } from 'gatsby'

const Procedures = ({
    className,
    title,
    procedures, 
    data
}) => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if(procedures) {
            const obj = procedures.find(p => p.isDefault);
            if(obj)
                setSelected(obj)
        }
    }, []);

    console.log('data de proceduresssssss:', data);

    return (
        <div
            id="procedures" 
            className={className}>
            {/* Displayed in desk */}
            <section className="container-fluid m-0 px-0 py-5 d-none d-md-block">
                <div className="d-flex justify-content-center font-weight-bold">
                    <Feature2 title={title} />
                </div>
                <div
                    style={{height: "34.5rem"}} 
                    className="container d-flex align-items-center">
                    <div className="d-inline-block w-50">
                        {
                            procedures.map((item, index) => (
                                <div
                                    key={`proc${index}`}
                                    className="d-inline-block w-50"
                                    style={{
                                        cursor: "pointer"
                                    }}
                                    onClick={() => setSelected(item)}>
                                    <div
                                        className="card border-0">
                                        <img 
                                            src={item.image} 
                                            className="card-img" 
                                            alt={item.alt} 
                                            />
                                        {
                                            ((!selected && index < 3) || (selected && selected.content.title !== item.content.title)) && (
                                                <div
                                                    style={{
                                                        backgroundColor: "#17a4d6", opacity: ".5",
                                                        width: "96%",
                                                        height: "97%",
                                                        left: "2%",
                                                        top: "1%"
                                                    }} 
                                                    className="card-img-overlay item-image" />
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {
                        selected && (
                            <div
                                style={{backgroundColor: "#f4f5fa"}} 
                                className="w-50 d-flex flex-column justify-content-center ml-2 px-5 py-3 h-100">
                                <h3 className="text-muted font-weight-bold">
                                    {selected.content.title}
                                </h3>
                                <PerfectScrollbar>
                                    <ul 
                                        className="pl-0"
                                        style={{listStylePosition: "inside", color: "#17a4d6", fontSize: "25px", lineHeight: "25px"}}>
                                        {
                                            selected.content.items.map((item, index) => (
                                                    <li 
                                                        key={`cont2${index}`}>
                                                        <span
                                                            className="text-muted" 
                                                            style={{color: "initial", fontSize: "initial"}}>
                                                            {item.description}
                                                        </span>
                                                    </li>
                                            )) 
                                        }
                                    </ul>
                                </PerfectScrollbar>
                                <div className="d-flex">
                                    <ButtonMore 
                                        className="btn btn-sm btn-info px-4 font-weight-bold mt-3"
                                        to="/procedure" />
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>

            {/* Displayed in mobile */}
            <div className="container d-block d-md-none px-5 pt-3 pb-5">
                <div className="d-flex justify-content-center font-weight-bold">
                    <Feature2 title={title} />
                </div>
                <Carousel showStatus={false} showThumbs={false} emulateTouch>
                    {
                        procedures.map((item, index) => (
                            <div
                                key={`proc2${index}`}
                                style={{backgroundColor: "#f4f5fa"}} 
                                className="card h-100">
                                <img 
                                    src={item.image} 
                                    className="card-img-top" 
                                    alt={item.alt} 
                                    />
                                <div 
                                    className="card-body">
                                    <h3 className="card-title text-center">{item.content.title}</h3>
                                    <ul 
                                        className="pl-0 text-left pb-3"
                                        style={{listStylePosition: "inside", color: "#17a4d6", fontSize: "25px", lineHeight: "25px"}}>
                                        {
                                            item.content.items.map((item2, index) => (
                                                    <li 
                                                        key={`cont${index}`}>
                                                        <span
                                                            className="text-muted" 
                                                            style={{color: "initial", fontSize: "initial"}}>
                                                            {item2.description}
                                                        </span>
                                                    </li>
                                            )) 
                                        }
                                    </ul>
                                    <div className="d-flex mb-4">
                                        <ButtonMore 
                                            className="btn btn-sm btn-info text-capitalize px-4 font-weight-bold mx-auto"
                                            to="/procedure" />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

const procedures = {
    title: "PROCEDIMIENTOS",
    procedures: [{
        image: "/img/proc1.png",
        alt: "procedure 1",
        to: "/",
        isDefault: false,
        content: {
            title: "CIRUGÍAS FACIALES",
            items: [{
                description: "Cirugía de nariz (rinoplastia, septoplastía, turbinoplastia, septorrinoplastia o rinoseptoplastia)"
            },{
                description: "Rejuvenecimiento facial (lifting, reconstitución del tercio inferior)."
            },{
                description: "Blefaroplastia superior u operación de párpados."
            },{
                description: "Bichectomía o cirugía maxilofacial"
            }]
        }
    },{
        image: "/img/proc2.png",
        alt: "procedure 2",
        to: "/",
        isDefault: false,
        content: {
            title: "CIRUGÍAS CORPORALES",
            items: [{
                description: "Mamoplastia de aumento"
            },{
                description: "Mamoplastia de reducción"
            },{
                description: "Liposucción"
            },{
                description: "Abdominoplastia"
            },{
                description: "Marcación abdominal"
            },{
                description: "Implante de pantorrilla."
            },{
                description: "Gluteoplastia"
            },{
                description: "Rejuvenecimiento vaginal"
            },{
                description: "Cambio de sexo"
            },{
                description: "Cirugía transgénero"
            }]
        }
    },{
        image: "/img/proc3.png",
        alt: "procedure 3",
        to: "/",
        isDefault: false,
        content: {
            title: "RECONSTRUCCIONES AVANZADAS CON MICROCIRUGÍA ESTÉTICA, MÉDICAS O ACCIDENTALES",
            items: [{
                description: "Reconstrucción mamaria parcial o total"
            },{
                description: "Reconstrucciones en cabeza, cuello y demás miembros superiores e inferiores"
            }]
        }
    },{
        image: "/img/proc4.svg",
        alt: "procedure 4",
        to: "/",
        isDefault: true,
        content: {
            title: "PROCEDIMIENTOS NO QUIRÚRGICOS PARA HOMBRES Y MUJERES",
            items: [{
                description: "Rejuvenecimiento celular"
            },{
                description: "Sueroterapia"
            },{
                description: "Hollywood Peel"
            },{
                description: "Ácido Hualurónico"
            },{
                description: "Toxina botulínica (Botox)"
            },{
                description: "Peeling laser"
            },{
                description: "Tratamiento de hilos tensores para moldear la nariz"
            },{
                description: "Hydrafacial 4D (limpieza facial produnda)"
            },{
                description: "Coolifting (hidratación facial profunda con CO2)"
            },{
                description: "Mesoterapia facial y corporal"
            },{
                description: "Lazer para limpiar tratamientos"
            },{
                description: "Masculinizacion facial"
            },{
                description: "Tratamiento para cicatrices"
            },{
                description: "Eliminación de tatuajes"
            },{
                description: "Lipoinyección glutea"
            }]
        }
    }]
}

export default () => (
    <StaticQuery
      query={graphql`
        query ProceduresQuery {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: { frontmatter: { templateKey: { eq: "procedure" } } }
              ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
      `}
      render={(data, count) => <Procedures data={data} count={count} title={procedures.title} procedures={procedures.procedures} />}
    />
  )