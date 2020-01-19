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
            <h3 className="text-center font-weight-bold text-white mb-5 d-none d-md-block">
                {title}
            </h3>
            <h2 className="text-center font-weight-bold text-white mb-5 d-block d-md-none">
                {title}
            </h2>
            <p 
                style={{opacity: ".9"}}
                className="text-white text-center">
                {description}
            </p>
        </div>
    )
}

const Comments = ({
    title,
    charList
}) => {
    return (
        <div id="testimonials">
            {/* Displayed in desk */}
            <section
                style={{backgroundColor: "#1592e6"}} 
                className="container-fluid m-0 px-0 py-5 d-none d-md-block">
                <div className="container">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2
                            style={{color: "white"}} 
                            title={title}
                            primaryColor="#D8E500"
                            secondaryColor="white" />
                    </div>
                </div>
                <div className="row mt-5 pb-4">
                    {
                        charList.map((item, index) => {
                            return (
                                <div
                                    key={`serv${index}`} 
                                    style={{borderRight: "1px dashed white"}}
                                    className="col-md-4">
                                    <Item 
                                        image={getImage(item.charImage)}
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
                style={{backgroundColor: "#1592e6"}} 
                className="container-fluid d-block d-md-none px-3 px-sm-5 pt-3 pb-5">
                <div
                    className="container px-sm-5 py-3">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2 
                            style={{color: "white"}} 
                            title={title}
                            primaryColor="#D8E500"
                            secondaryColor="white" />
                    </div>
                    <Carousel showStatus={false} showThumbs={false} emulateTouch>
                        {
                            charList.map((item, index) => {
                                return(
                                    <div
                                        key={`serv2${index}`} 
                                        className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                                        <Item 
                                            image={getImage(item.charImage)}
                                            title={item.name}
                                            description={item.description} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

Comments.defaultProps = {
    title: "COLEGIO JOSE ESUTACIO RIVERA"
}

export default Comments;