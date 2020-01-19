import React from 'react'
import { Link } from 'gatsby'
import { Link as LinkScroll } from "react-scroll";

const links = [{
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

const Header = ({
    location
}) => {
    return (
        <div id="header">
            <nav 
                style={{boxShadow: "0 2.5px 2px 0 rgba(0, 0, 0, 0.09)"}}
                className="navbar navbar-expand-lg navbar-light px-5 border-bottom">
                <Link className="navbar-brand" to="/">
                    <img
                        className="header__logo img-fluid"
                        src="/img/logo.svg" 
                        alt="placeholder image" 
                        />
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div 
                    className="collapse navbar-collapse" 
                    id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto align-items-center">
                        {
                            links.map((item, index) => (
                                <li 
                                    key={`link${index}`} 
                                    className="nav-item ml-md-4">
                                    {
                                        item.redirect ? (
                                            <Link 
                                                to={item.to}
                                                className={`nav-link ${location && location.pathname === item.to ? "active" : ""} text-muted font-weight-bold pb-0`}>
                                                {item.name}
                                            </Link>
                                        ) : (
                                            <LinkScroll
                                                smooth={true}
                                                duration={500}
                                                to={item.to}
                                                className={`c-pointer nav-link ${location && location.pathname.includes(item.to.replace("#", "/")) ? "active" : ""} text-muted font-weight-bold pb-0`}>
                                                {item.name}
                                            </LinkScroll>
                                        )
                                    }
                                </li>
                            ))
                        }
                    </ul>
                    <button 
                        style={{top: "5px"}}
                        type="button" 
                        className="btn btn-sm btn__custom position-relative text-capitalize px-4 d-flex mx-auto ml-lg-4 mr-lg-0">
                            <LinkScroll 
                                smooth={true}
                                duration={500}
                                to="form"
                                style={{color: "white"}}
                                >
                                Inscríbete
                            </LinkScroll>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header;