import React from 'react'
import Feature2 from './Feature2';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Comments = ({
    title,
    testimonials
}) => {
    return (
        <>
            {/* Displayed in desk */}
            <section
                id="testimonials"
                style={{backgroundColor: "#f4f5fa"}} 
                className="container-fluid m-0 px-0 py-5 d-none d-md-block">
                <div className="container">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2 title={title} />
                    </div>
                    <div className="row">
                        {
                            testimonials.map((item, index) => (
                                <div
                                    key={`test${index}`} 
                                    className="col-md-6 col-lg-4 mb-3 mb-lg-0">
                                    <div className="card py-4 bg-white h-100">
                                        <div
                                            style={{
                                                width: "200px", height: "200px",
                                                border: "3px solid transparent",
                                                backgroundClip: "padding-box, border-box",
                                                backgroundOrigin: "padding-box, border-box",
                                                backgroundImage: "linear-gradient(90deg, #fff, #fff), linear-gradient(115deg, #71ffd2, #075ecf)"
                                            }}
                                            className="card-img-top mx-auto rounded-circle d-flex justify-content-center align-items-center p-3" 
                                            >
                                            <img 
                                                src={item.image} 
                                                className="w-50 mx-auto w-100" 
                                                alt={item.alt} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title text-center mt-4 font-weight-bold text-muted">{item.title}</h5>
                                            <div
                                                style={{borderTop: "3px"}} 
                                                className="border w-75 mx-auto mb-4" />
                                            <p className="card-text text-muted text-center px-md-4">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Displayed in mobile */}
            <div
                style={{backgroundColor: "#f4f5fa"}} 
                className="container-fluid d-block d-md-none px-3 px-sm-5 pt-3 pb-5">
                <div className="container px-sm-5 py-3">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2 title={title} />
                    </div>
                    <Carousel showStatus={false} showThumbs={false} emulateTouch>
                        {
                            testimonials.map((item, index) => (
                                <div
                                    key={`test2${index}`}
                                    className="card h-100">
                                    <div
                                        style={{
                                            width: "200px", height: "200px",
                                            border: "3px solid transparent",
                                            backgroundClip: "padding-box, border-box",
                                            backgroundOrigin: "padding-box, border-box",
                                            backgroundImage: "linear-gradient(90deg, #fff, #fff), linear-gradient(115deg, #71ffd2, #075ecf)"
                                        }}
                                        className="card-img-top mx-auto rounded-circle d-flex justify-content-center align-items-center p-3 mt-4" 
                                        >
                                        <img 
                                            src={item.image} 
                                            className="w-50 mx-auto w-100" 
                                            alt={item.alt} />
                                    </div>
                                    <div 
                                        className="card-body pb-5">
                                        <h5 className="card-title text-center mt-4 font-weight-bold text-muted">{item.title}</h5>
                                        <div
                                            style={{borderTop: "3px"}} 
                                            className="border w-75 mx-auto mb-5" />
                                        <p className="card-text text-muted text-center px-md-4">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

Comments.defaultProps = {
    title: "TESTIMONIOS",
    testimonials: [{
        image: "/img/test1.png",
        alt: "testimonial 1",
        title: "Lorem impsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    },{
        image: "/img/test2.png",
        alt: "testimonial 1",
        title: "Lorem impsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    },{
        image: "/img/test3.png",
        alt: "testimonial 1",
        title: "Lorem impsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    }]
}

export default Comments;