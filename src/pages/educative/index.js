import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'gatsby';
import Feature2 from '../../components/Feature2';
import { graphql, StaticQuery } from 'gatsby';
import { getImage } from '../../utils';
import ButtonMore from '../../components/ButtonMore';

const Item = ({
    title,
    image,
    alt,
    description,
    url
}) => {
    return (
        <div className="item rounded">
            <img 
                src={image}
                alt={alt}
                className="img-fluid"
                style={{backgroundSize: "cover"}} />
            <div className="item__box border p-3">
                <h6 className="font-weight-bold d-none d-md-block text-uppercase">
                    {title}
                </h6>
                <h5 className="font-weight-bold d-block d-md-none text-uppercase">
                    {title}
                </h5>
                <hr />
                <p className="text-ellipsis">
                    {description}
                </p>
                <ButtonMore to="/" />
            </div>
        </div>
    )
}

const MAX_PER_SLIDE = 4;

const data2 = [{
    image: "/img/propuesta1.png",
    title:"Guarderia y jardin",
    description: "Lo primero que un niño debe aprender es a ser feliz. Utilizamos una metodología en la que cada uno aprende a su ritmo y en contacto con la naturaleza. Honramos y respetamos el interés…"
}, {
    image: "/img/propuesta2.png",
    title:"Preescolar y primaria",
    description: "Buscamos interesar a los estudiantes en el aprendizaje a través de una metodología activa e innovadora basada en el respeto a los intereses y habilidades de cada uno que potencia la cooperación…"
}, {
    image: "/img/propuesta3.png",
    title:"Media y bachillerato",
    description: "Aprendizaje basado en problemas que promueve el pensamiento crítico y creativo. Respetamos la individualidad y la libertad del estudiante a fin de que logre el pleno desarrollo de sus ..."
}];

const Educative = ({
    data
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
            id="proposal"
            className="container-fluid m-0 px-0 position-relative pb-5">
            <div className="container">
                <div className="d-flex justify-content-center font-weight-bold py-3">
                    <Feature2 title="PROPUESTA DE FORMACIÓN INTEGRAL" />
                </div>
                <div className="d-none d-md-block">
                    <div className="row mt-5 pb-4">
                        {
                            data2.map((item, index) => {
                                return (
                                    <div
                                        key={`prop${index}`} 
                                        className="col-md-4">
                                        <Item 
                                            image={item.image}
                                            title={item.title}
                                            description={item.description}
                                            to={null} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* Displayed in mobile */}
                <Carousel className="d-block d-md-none" showStatus={false} showThumbs={false} emulateTouch>
                    {
                        data2.map((item, index) => (
                            <div
                                style={{backgroundColor: "transparent"}} 
                                className="row px-3 px-sm-5 px-md-0">
                                <div
                                    key={`prop${index}`} 
                                    className="col-md-4">
                                    <Item 
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        to={null} />
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default props => (
    <StaticQuery
      query={graphql`
        query EducativeQuery {
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
      render={(data, count) => <Educative data={data} count={count} {...props} />}
    />
  )