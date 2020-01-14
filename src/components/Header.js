import React from 'react'
import { Link } from 'gatsby'
import ScrollspyNav from "react-scrollspy-nav";

const links = [{
    name: "Dra Carolina Carvajal",
    to: "#presentation"
},{
    name: "Procedimientos",
    to: "#procedures"
},{
    name: "Testimonios",
    to: "#testimonials"
}, {
    name: "Productos",
    to: "#products"
},{
    name: "Blog",
    to: "/blog-page",
    redirect: true
}];

const Header = ({
    location
}) => {
    return (
        <div id="header">
            <ScrollspyNav
                scrollTargetIds={["presentation", "procedures", "testimonials", "products", "blog"]}
            >
                <nav 
                    style={{boxShadow: "0 2.5px 2px 0 rgba(0, 0, 0, 0.09)"}}
                    className="navbar navbar-expand-lg navbar-light px-5 border-bottom">
                    <Link className="navbar-brand" to="/">
                        <img
                            width="150" 
                            className="img-fluid"
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
                                                    className={`nav-link ${location.pathname === item.to ? "active" : ""} text-muted font-weight-bold pb-0`}>
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                <a
                                                    href={item.to}
                                                    className={`nav-link ${location.pathname === item.to ? "active" : ""} text-muted font-weight-bold pb-0`}>
                                                    {item.name}
                                                </a>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                        <button 
                            style={{top: "5px"}}
                            type="button" 
                            className="btn btn-sm btn-info position-relative text-capitalize px-4 font-weight-bold d-flex mx-auto ml-lg-4 mr-lg-0">
                            <ScrollspyNav 
                                scrollTargetIds={["form"]}
                                scrollDuration="1000">
                                <a 
                                    style={{color: "white"}}
                                    href="#form">
                                    solicitar información
                                </a>
                            </ScrollspyNav>
                        </button>
                    </div>
                </nav>
            </ScrollspyNav>

                {/* <img 
                    className="responsive-img"
                    src="http://via.placeholder.com/150x70" 
                    alt="placeholder image" 
                    />
                <div className="d-flex align-items-center">
                    <ul className="nav">
                        {
                            links.map((item, index) => (
                                <li 
                                    key={`link${index}`}
                                    className="nav-item">
                                    <Link className="nav-link active" to="/">{item.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <button 
                        type="button" 
                        className="btn btn-info text-capitalize px-4">
                        agendar cita
                    </button>
                </div> */}
        </div>
    )
}

export default Header;