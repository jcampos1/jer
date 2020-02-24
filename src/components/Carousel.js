import React, {useEffect, useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Item = ({
    image, alt
}) => {
    return (
        <img 
            src={image} 
            alt={alt} 
            width="100"
            height="100"
            className="img-fluid rounded-circle p-5 p-md-3" />
    )
}

const ITEMS_PER_SLIDE = 6;

const CarouselLogos = ({
    logos
}) => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        let _slides = [];
        for (let index = 0; index < logos.length; index = index+ITEMS_PER_SLIDE) {
            _slides.push(logos.slice(index, index+ITEMS_PER_SLIDE))
        }
        setSlides(_slides);
    }, []);

    return (
        <div className="bg-white">
            {/* DESKTOP */}
            <div className="d-none d-md-block">
                <Carousel showStatus={false} showThumbs={false} emulateTouch>
                    {
                        slides.map((slide, index) => (
                            <div
                                key={`slide${index}`} 
                                className="container py-3">
                                <div className="row">
                                    {
                                        slide.map((item, index2) => (
                                            <div
                                                key={`slide-item${index}${index2}`} 
                                                className="col-md-2">
                                                <Item 
                                                    image="https://via.placeholder.com/120"
                                                    alt={item.alt} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
            
            {/* MOBILE */}
            <div className="d-block d-md-none">
                <Carousel showStatus={false} showThumbs={false} emulateTouch>
                    {
                        logos.map((item, index) => (
                            <Item 
                                image="https://via.placeholder.com/120"
                                alt={item.alt} 
                                key={`slide-mobile-item${index}`}/>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselLogos;