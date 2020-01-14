import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'gatsby';
import Feature2 from '../../components/Feature2';
import { graphql, StaticQuery } from 'gatsby';
import { getImage } from '../../utils';

const Item = ({
    name,
    image,
    alt,
    url
}) => {
    return (
        <div
            style={{borderRadius: "14px"}} 
            className="d-flex justify-content-between align-items-center bg-info px-4 py-3">
            <div className="d-flex align-items-center">
                <div
                    className="framew d-flex align-items-center justify-content-center bg-white rounded-circle mr-sm-3">
                        <img 
                            src={image}
                            alt={alt}
                            className="framew__img img-fluid"
                            />
                </div>
                <span
                    className="framew__desc font-weight-bold text-white">
                    {name}
                </span>
            </div>
            <Link 
                to={url}
                style={{backgroundColor: "#71ffd2"}}
                className="btn px-4 text-muted d-none d-md-block">
                Ver mas
                <span
                    style={{width: "18px", height: "18px", border: "solid 1px #707070"}} 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle ml-2">+</span>
            </Link>
            <Link 
                style={{backgroundColor: "#71ffd2"}}
                to={url} 
                className="btn btn-sm px-4 text-muted d-block d-md-none">
                Ver mas
                <span
                    style={{width: "18px", height: "18px", border: "solid 1px #707070"}} 
                    className="d-inline-flex align-items-center justify-content-center rounded-circle ml-2">+</span>
            </Link>
        </div>
    )
}

const MAX_PER_SLIDE = 4;

const Products = ({
    title,
    data
    // items
}) => {
    const [productsSet, setProductsSet] = useState([]);

    const items = data.allMarkdownRemark.edges;

    useEffect(() => {
        let aux = [];
        const len = items.length;
        if(len > 0) {
            const count = Math.ceil(len / MAX_PER_SLIDE);
            for (let index = 0; index < count; index++) {
                const prodSet = items.slice(index*MAX_PER_SLIDE, (index+1)*MAX_PER_SLIDE);
                aux.push(prodSet);
            }   
        }
        setProductsSet(aux);
    }, [items]);

    return (
        <section
            id="products"
            className="container-fluid m-0 px-0 position-relative pb-5">
            <img 
                style={{opacity: ".2", zIndex: "-100", top: "0", left: "0"}}
                src="/img/prod-bg.png"
                alt="product bg"
                className="w-100 h-100 position-absolute d-none d-md-block"
                />
            <img 
                style={{opacity: ".2", zIndex: "-100", top: "0", left: "0"}}
                src="/img/prod-bg-mobile.jpg"
                alt="product bg"
                className="w-100 h-100 position-absolute d-block d-md-none"
                />
            <div className="container">
                <div className="d-flex justify-content-center font-weight-bold py-3">
                    <Feature2 title={title} />
                </div>

                {/* Displayed in desk */}
                <div className="row px-5 px-md-0 d-none d-md-flex">
                    {
                        items.map((item, index) => (
                            <div
                                key={`proditem${index}`} 
                                className="col-lg-6 mb-4">
                                <Item 
                                    name={item.node.frontmatter.name} 
                                    image={getImage(item.node.frontmatter.cover)}
                                    alt={item.node.frontmatter.cover.alt}
                                    url={item.node.fields.slug}
                                    />
                            </div>
                        ))
                    }
                </div>

                {/* Displayed in mobile */}
                <Carousel className="d-block d-md-none" showStatus={false} showThumbs={false} emulateTouch>
                    {
                        productsSet.map((_products, index) => (
                            <div
                                style={{backgroundColor: "transparent"}} 
                                className="row px-3 px-sm-5 px-md-0">
                                {
                                    _products.map((elem, index2) => {
                                        console.log('elem :', elem);
                                        return (
                                            <div
                                                key={`proditem3${index}${index2}`}
                                                className="col-md-6 mb-5">
                                                <Item 
                                                    name={elem.node.frontmatter.name}
                                                    image={getImage(elem.node.frontmatter.cover)}
                                                    alt={elem.node.frontmatter.cover.alt} 
                                                    url={elem.node.fields.slug}
                                                    />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}

Products.defaultProps = {
    title: "PRODUCTOS",
    // items: [{
    //     image: "/img/icon-fajas.svg",
    //     alt: "testimonial 1",
    //     name: "Fajas",
    //     url: "/",
    // },{
    //     image: "/img/icon-brasier-band.svg",
    //     alt: "testimonial 1",
    //     name: "Bandas de brasier",
    //     url: "/",
    // },{
    //     image: "/img/icon-table-abd.svg",
    //     alt: "testimonial 1",
    //     name: "Tablas abdominales",
    //     url: "/",
    // },{
    //     image: "/img/icon-medias.svg",
    //     alt: "testimonial 1",
    //     name: "Medias anti embólicas o de compresión",
    //     url: "/",
    // },{
    //     image: "/img/icon-espumas.svg",
    //     alt: "testimonial 1",
    //     name: "Espumas",
    //     url: "/",
    // },{
    //     image: "/img/icon-mentonera.svg",
    //     alt: "testimonial 1",
    //     name: "Mentoneras",
    //     url: "/",
    // },{
    //     image: "/img/icon-brasier.svg",
    //     alt: "testimonial 1",
    //     name: "Brasier quirurigico",
    //     url: "/",
    // }, {
    //     image: "/img/icon-post-operatory.svg",
    //     alt: "Medicamentos post operatorio",
    //     name: "Medicamentos post operatorio",
    //     url: "/",
    // }]
}

export default props => (
    <StaticQuery
      query={graphql`
        query ProductsQuery {
            allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "product-page" } } }
              ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            name
                            cover {
                                alt
                                image {
                                    childImageSharp {
                                      fluid {
                                        ...GatsbyImageSharpFluid
                                      }
                                    }
                                    extension
                                    publicURL
                                  }
                            }
                            prod {
                                name
                                price
                            }
                        }
                    }
                }
            }
        }
      `}
      render={(data, count) => <Products data={data} count={count} title="PRODUCTOS" {...props} />}
    />
  )