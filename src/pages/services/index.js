import React from 'react'
import Feature2 from '../../components/Feature2';
import { graphql, StaticQuery, Link } from 'gatsby';
import ButtonMore from '../../components/ButtonMore';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getImage } from '../../utils';

const Item = ({
    title,
    image,
    alt,
    to
}) => {
    return (
        <div className="d-flex flex-column justify-content-center">
            <div className="position-relative">
                <img 
                    src={image}
                    alt={alt}
                    className="img-fluid rounded-circle"
                    style={{zIndex: "1000"}} />
                <div className="photo-frame-serv border position-absolute rounded-circle" />
            </div>
            <div
                className="font-weight-bold mb-2 mx-auto my-3">
                {title}
            </div>
            <div className="d-flex justify-content-center">
                <ButtonMore
                    style={{color: "white", borderRadius: "18px"}}
                    isShowIcon={false} 
                    to={to} />
            </div>
        </div>
    )
}

const data = [{
    title: "Restaurante",
    image: "/img/service1.svg",
    alt: "gfdg",
    to: "/admission"
}, {
    title: "Transporte",
    image: "/img/service2.svg",
    alt: "gfdg",
    to: "/admission"
},{
    title: "Enfermería",
    image: "/img/service3.svg",
    alt: "gfdg",
    to: "/admission"
},{
    title: "Psicología ",
    image: "/img/service4.svg",
    alt: "gfdg",
    to: "/admission"
},{
    title: "Terapia ocupacional",
    image: "/img/service5.svg",
    alt: "gfdg",
    to: "/admission"
},{
    title: "Terapia del lenguaje",
    image: "/img/service6.svg",
    alt: "gfdg",
    to: "/admission"
}];

const Services = ({
    // title,
    // data
}) => {
    return (
        <>
            {/* Displayed in desk */}
            <section
                id="services"
                className="container-fluid m-0 px-0 py-5 bg-light position-relative">
                <div className="container">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2 title="Servicios" />
                    </div>
                </div>
                <div className="row">
                    {
                        data.map((item, index) => (
                            <div 
                                key={`serv${index}`}
                                className="col-sm-6 col-md-4 d-flex justify-content-center mt-5">
                                <Item 
                                    title={item.title}
                                    image={item.image}
                                    alt={item.alt}
                                    to={item.to} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Services;