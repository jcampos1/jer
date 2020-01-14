import React from 'react'
import Feature2 from '../../components/Feature2';

const BlogSection = ({
    title,
    items
}) => {
    return (
        <>
            {/* Displayed in desk */}
            <section
                id="blog" 
                className="container-fluid m-0 px-0 py-5 bg-light">
                <div className="container">
                    <div className="d-flex justify-content-center font-weight-bold">
                        <Feature2 title={title} />
                    </div>
                    <div className="row">
                        {
                            items.map((item, index) => (
                                <div
                                    key={`blog${index}`} 
                                    className="col-md-6 col-lg-4 mb-5 mb-lg-0 px-4 px-sm-5 px-md-3">
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.image})`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            height: "26rem",
                                        }}
                                        className="shadow-sm position-relative"
                                        >
                                        <div
                                            style={{
                                                bottom: "0", 
                                                left: "0", 
                                                height: "9rem", 
                                                
                                            }} 
                                            className="text-white d-flex flex-column justify-content-center position-absolute w-100"
                                            >
                                                <div style={{
                                                    top: "0",
                                                    left: "0",
                                                    opacity: ".8",
                                                    backgroundColor: "#17a4d6"
                                                }} 
                                                className="w-100 h-100 position-absolute" />
                                                <span
                                                    style={{height: "5px", width: "4rem", zIndex: "1"}} 
                                                    className="mx-3 bg-white rounded d-block" />
                                                <p
                                                    className="px-3 mt-3 c-pointer" 
                                                    style={{zIndex: "1"}}>{item.description}</p>
                                        </div>
                                            
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

BlogSection.defaultProps = {
    title: "BLOG",
    items: [{
        image: "/img/blog1.png",
        alt: "blog 1",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    },{
        image: "/img/blog2.png",
        alt: "blog 2",
        title: "Lorem impsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    },{
        image: "/img/blog3.png",
        alt: "blog 3",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
    }]
}

export default BlogSection;