import React from 'react'
import FormSection from './FormSection';
import { Link } from 'gatsby';

const navigationMap = [{
    name: "Oferta educativa",
    to: "profile"
},{
    name: "Servicios",
    to: "procedure"
},{
    name: "Nosotros",
    to: "testimonials"
},{
    name: "Blog",
    to: "/blog-page",
    redirect: true
}, {
    name: "Circular",
    to: "product"
}, {
    name: "Admisión",
    to: "product"
}];

const contacts = [{
    icon: "/img/youtube.svg",
    alt: "fddfd",
    url: "/"
}, {
    icon: "/img/instagram.svg",
    alt: "fddfd",
    url: "/"
}, {
    icon: "/img/twitter.svg",
    alt: "fddfd",
    url: "/"
}, {
    icon: "/img/facebook.svg",
    alt: "fddfd",
    url: "/"
}];

const Footer2 = () => {
    return (
        <div>
            {/* Form section */}
            <FormSection />
            <footer
                className="footer px-3 px-md-5 py-3 w-100">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-between align-items-center mb-4 mb-md-0">
                        <img
                            width="80"
                            className="img-fluid"
                            src="/img/logo.svg" 
                            alt="placeholder image" 
                            />
                        <div>
                            {
                                navigationMap.slice(0,3).map((item, index) => (
                                    <Link 
                                        key={`nav${index}`}
                                        to={item.to}
                                        className={`nav-link font-weight-bold text-white pb-0`}>
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </div>
                        
                        <div>
                            {
                                navigationMap.slice(3,6).map((item, index) => (
                                    <Link 
                                        key={`nav${index}`}
                                        to={item.to}
                                        className={`nav-link font-weight-bold text-white pb-0`}>
                                        {item.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="contacts d-flex flex-row flex-md-column align-items-center col-md-3 col-lg-2 offset-md-3 offset-lg-4">
                        <div className="social-networks mr-3 mr-md-0">
                            <div className="d-flex align-items-center justify-content-between">
                                {
                                    contacts.map((item, index) => (
                                        <a href={item.url}>
                                            <img 
                                                src={item.icon}
                                                alt={item.alt}
                                                className="img-fluid" />
                                        </a>
                                    ))
                                }
                            </div>
                            <hr className="bg-white mb-0 mb-md-3" />
                        </div>
                        <div className="phones d-flex flex-column mr-auto text-white font-weight-bold">
                            <small>(+57) 317 372 40 33</small>
                            <small>(+57) 311 251 17 40</small>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer2;