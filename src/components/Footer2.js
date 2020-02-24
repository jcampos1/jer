import React from 'react'
import FormSection from './FormSection';
import { Link, StaticQuery, graphql } from 'gatsby';

const navigationMap = [{
    name: "Inicio",
    to: "/"
},{
    name: "Admin Hicome",
    to: "/"
},{
    name: "Características",
    to: "/"
}, {
    name: "Clientes",
    to: "/"
}, {
    name: "Regístrate",
    to: "/"
}];

const socialNetworks = {
    whatsapp: {
        image: "/img/ws.svg",
        alt: "wathsapp"
    }, 
    instagram: {
        image: "/img/instagram.svg",
        alt: "wathsapp"
    }, 
    youtube: {
        image: "/img/youtube.svg",
        alt: "wathsapp"
    }, 
    facebook: {
        image: "/img/facebook.svg",
        alt: "wathsapp"
    }
};

const Footer2 = ({
    data
}) => {
    const { phones, email } = data.markdownRemark.frontmatter.contacts;
    const { 
        networks 
    } = data.markdownRemark.frontmatter;

    return (
        <footer
            className="footer px-3 px-md-5 py-3 w-100 bg-1">
            <div className="row text-white">
                <div className="col-md-4 d-flex align-items-center d-block d-md-none mb-4">
                    <img
                        width="100"
                        className="img-fluid mx-auto"
                        src="/img/logo-footer.png" 
                        alt="placeholder" 
                        />
                </div>
                <div className="col-md-4">
                    <div className="mb-4 d-flex align-items-center">
                        <span className="mr-2 font-weight-bold">Contacto</span>
                        <hr className="bg-white w-100" />
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <span>{email}</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        {
                            phones.map(ph => (
                                <span>{ph.phone}</span>
                            ))
                        }
                    </div>
                    <div className="d-flex align-items-center mt-3">
                        {
                            Object.keys(networks).map((net, index) => (
                                <a href={networks[net]} target="_blank" without rel="noopener noreferrer">
                                    <img
                                        width="35px"
                                        key={`red${index}}`} 
                                        src={socialNetworks[net].image} 
                                        alt={socialNetworks[net].alt} 
                                        className="mx-auto mr-md-2" />
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-4 d-flex align-items-center">
                        <span className="mr-2 font-weight-bold">Menu</span>
                        <hr className="bg-white w-100" />
                    </div>
                    {
                        navigationMap.map((item, index) => (
                            <div className="d-flex align-items-center mb-2">
                                <span
                                    className="mr-2 bg-white rounded-circle" 
                                    style={{width: "5px", height: "5px"}} />
                                <span style={{opacity: ".8"}}>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
                <div className="col-md-4 d-md-flex align-items-center d-none">
                    <img
                        width="100"
                        className="img-fluid ml-md-auto"
                        src="/img/logo-footer.png" 
                        alt="placeholder" 
                        />
                </div>
            </div>
        </footer>
    )
}

export default props => (
    <StaticQuery
      query={graphql`
        query Footer2 {
            markdownRemark(frontmatter: { templateKey: { eq: "landing" } }) {
                frontmatter {
                    contacts {
                        email
                        phones {
                            phone
                        }
                    }
                    networks {
                        facebook
                        instagram
                        whatsapp
                        youtube
                    }
                }
            }
        }
      `}
      render={(data, count) => <Footer2 data={data} count={count} {...props} />}
    />
  )