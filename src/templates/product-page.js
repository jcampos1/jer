import React from 'react'
import TemplateWrapper2 from '../components/Layout2'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Subitem = ({
    image,
    alt,
    title,
    price
}) => {
    return (
        <div
            className="mr-3">
            <img src={image} alt={alt} className="img-fluid" />
            <span className="text-muted d-block">{title}</span>
            <div>
                <h5 className="d-inline text-muted font-weight-bold">$</h5>
                <h4 className="d-inline text-muted font-weight-bold">
                    {price}
                </h4>
            </div>
        </div>
    )
}

const SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true
        }
      },
      {
          breakpoint: 300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
        }
    ]
}

const Product = ({
    drName,
    networks,
    location,
    items
}) => {

  return (
    <TemplateWrapper2 location={location}>
        <div id="product">
            <div
                className="container mt-3 mt-md-5">
                <div className="d-flex justify-content-between flex-wrap">
                    {
                        items.map((item, index) => (
                            <a href={`#${item.name}`}>
                                <div className="mx-auto d-flex flex-column align-items-center justify-content-start mb-3 mr-sm-3 mr-md-4">
                                    <div
                                        className="align-items-start d-block bg-info framew d-flex align-items-center justify-content-center rounded-circle">
                                            <img 
                                                src={item.image}
                                                alt={item.alt}
                                                className="framew__img img-fluid"
                                                />
                                    </div>
                                    <span
                                        style={{width: "6rem"}} 
                                        className="text-info text-center d-block">
                                        {item.name}
                                    </span>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
            {
                items.map((item, index) => (
                    <section
                        id={item.name} 
                        className="container-fluid bg-light px-0 mb-5">
                        <div className="container py-5">
                            <div className="d-flex align-items-center mb-3 mr-sm-3">
                                <div
                                    className="mr-3 align-items-start d-block bg-info framew-big d-flex align-items-center justify-content-center rounded-circle">
                                        <img 
                                            src={item.image}
                                            alt={item.alt}
                                            className="framew-big__img img-fluid"
                                            />
                                </div>
                                <h3
                                    className="text-info text-center d-block">
                                    {item.name}
                                </h3>
                            </div>
                            <Slider {...SETTINGS}>
                            {
                                    item.subitems.map((sub, index2) => (
                                        <Subitem 
                                            key={`prod${index}${index2}`}
                                            image={sub.image}
                                            alt={sub.alt}
                                            title={sub.title}
                                            price={sub.price} />
                                    ))
                                }
                            </Slider>
                        </div>
                    </section>
                ))
            }
        </div>
    </TemplateWrapper2>
  )
}

Product.defaultProps = {
    items: [{
        image: "/img/icon-fajas-white.svg",
        alt: "testimonial 1",
        name: "Fajas",
        url: "/",
        subitems: [{
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Faja abdominal.",
            price: 123000
        }, {
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Faja rodillera.",
            price: 123000
        }, {
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Faja rodillera con manga.",
            price: 123000
        },{
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Faja abdominal.",
            price: 123000
        }, {
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Faja rodillera.",
            price: 123000
        }, {
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Faja rodillera con manga.",
            price: 123000
        }]
    },{
        image: "/img/icon-brasier-band-white.svg",
        alt: "testimonial 1",
        name: "Bandas de brasier",
        url: "/",
        subitems: [{
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Nombre del producto.",
            price: 123000
        }]
    },{
        image: "/img/icon-table-abd-white.svg",
        alt: "testimonial 1",
        name: "Tablas abdominales",
        url: "/",
        subitems: [{
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Nombre del producto.",
            price: 123000
        }]
    },{
        image: "/img/icon-medias-white.svg",
        alt: "testimonial 1",
        name: "Medias anti embólicas o de compresión",
        url: "/",
        subitems: [{
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Nombre del producto.",
            price: 123000
        }]
    },{
        image: "/img/icon-espumas-white.svg",
        alt: "testimonial 1",
        name: "Espumas",
        url: "/",
        subitems: [{
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Nombre del producto.",
            price: 123000
        }]
    },{
        image: "/img/icon-mentonera-white.svg",
        alt: "testimonial 1",
        name: "Mentoneras",
        url: "/",
        subitems: [{
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Nombre del producto.",
            price: 123000
        }]
    },{
        image: "/img/icon-brasier-white.svg",
        alt: "testimonial 1",
        name: "Brasier quirurigico",
        url: "/",
        subitems: [{
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Nombre del producto.",
            price: 123000
        }]
    }, {
        image: "/img/icon-post-operatory-white.svg",
        alt: "Medicamentos post operatorio",
        name: "Medicamentos post operatorio",
        url: "/",
        subitems: [{
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Anticoagulantes.",
            price: 123000
        }, {
            image: "/img/placeholder-image2.png",
            alt: "testimonial 1",
            title: "Antibióticos para el dolor.",
            price: 123000
        }]
    }]
}

export default Product;