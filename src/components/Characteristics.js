import React from 'react'
import Feature2 from './Feature2';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getImage } from '../utils';

const Item = ({
    image,
    alt,
    title,
    description
}) => {
    return (
        <div className="d-flex flex-column align-items-center">
            <div
                style={{width: "120px", height: "120px"}} 
                className="d-flex justify-content-center align-items-center bg-white rounded-circle mb-5">
                <img src={image} alt={alt} className="img-fluid" />
            </div>
            <h4 className="text-center font-weight-bold text-white mb-5 d-none d-md-block">
                {title}
            </h4>
            <h3 className="text-center font-weight-bold text-white mb-5 d-block d-md-none">
                {title}
            </h3>
            <p 
                style={{opacity: ".9"}}
                className="text-white text-center">
                {description}
            </p>
        </div>
    )
}

const Characteristics = ({
    charList
}) => {
    return (
        <>
            {/* Displayed in desk */}
            <section
                className="container-fluid bg-1 m-0 px-0 py-5 d-none d-md-block">
                <div className="row mt-5 pb-4">
                    {
                        charList.map((item, index) => {
                            return (
                                <div
                                    key={`serv${index}`} 
                                    style={{borderRight: "1px dashed white"}}
                                    className="col-md-4">
                                    <Item 
                                        image={item.charImage.image}
                                        title={item.name}
                                        description={item.description}
                                        alt={item.charImage.alt} />
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            {/* Displayed in mobile */}
            <div
                className="container-fluid bg-1 d-block d-md-none px-3 px-sm-5 pt-3 pb-5">
                <div
                    className="container px-sm-5 py-3">
                    <Carousel showStatus={false} showThumbs={false} emulateTouch>
                        {
                            charList.map((item, index) => {
                                return(
                                    <div
                                        key={`serv2${index}`} 
                                        className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                                        <Item 
                                            image={item.charImage.image}
                                            title={item.name}
                                            description={item.description} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Characteristics;