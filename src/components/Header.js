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
    to: "/about-us",
    redirect: true
},{
    name: "Blog",
    to: "/blog-page",
    redirect: true
}, {
    name: "Circular",
    to: "/circular-page",
    redirect: true
}, {
    name: "Admisión",
    to: "/admission",
    redirect: true
}];

const Header = ({
    location
}) => {
    return (
        <div id="header">
            <nav 
                style={{boxShadow: "0 2.5px 2px 0 rgba(0, 0, 0, 0.09)"}}
                className="navbar navbar-expand-lg navbar-light pb-0 pb-lg-2 px-0 px-lg-5 border-bottom">
                <Link className="navbar-brand" to="/">
                    <img
                        className="header__logo img-fluid ml-3 ml-lg-0"
                        src="/img/logo.svg" 
                        alt="placeholder image" 
                        />
                </Link>
                <button 
                    className="navbar-toggler mr-3 mr-lg-0" 
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
                    <div 
                        className="ml-lg-4 nav-item-header p-3 text-center d-block d-lg-none">
                        <h1>
                            <Link
                                className="font-weight-bold text-white" 
                                to="/" >
                                COLEGIO JOSE EUSTACIO RIVERA CAMPESTRE
                            </Link>
                        </h1>
                    </div>
                    <ul className="navbar-nav ml-auto align-items-center px-3">
                        {
                            links.map((item, index) => (
                                <li 
                                    key={`link${index}`} 
                                    className="nav-item nav-item-menu ml-lg-4 nav-li">
                                    {
                                        item.redirect ? (
                                            <Link 
                                                to={item.to}
                                                className={`nav-link ${location && location.pathname === item.to ? "active" : ""} text-muted font-weight-bold pb-0`}>
                                                <span className="d-inline-block d-lg-none mr-3">+</span>
                                                {item.name}
                                            </Link>
                                        ) : (
                                            <LinkScroll
                                                smooth={true}
                                                duration={500}
                                                to={item.to}
                                                className={`c-pointer nav-link ${location && location.pathname.includes(item.to.replace("#", "/")) ? "active" : ""} text-muted font-weight-bold pb-0`}>
                                                <span className="d-inline-block d-lg-none mr-3">+</span>
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
                        className="btn btn-sm btn__custom position-relative text-capitalize mb-2 mb-lg-0 px-4 d-flex mx-auto ml-lg-4 mr-lg-0">
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