import React from 'react'
import TemplateWrapper2 from '../../components/Layout2'
import ItemCard from '../../components/ItemCard'
import { graphql } from 'gatsby';

const Procedure = ({
    title,
    location,
    items,
    data
}) => {
    return (
        <TemplateWrapper2 location={location}>
            <section
                id="procedure" 
                className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
                <img 
                    style={{objectFit: "cover"}}
                    className="img-fluid jumbo__cover w-100 position-relative"
                    src="/img/cirugias-faciales.png"
                    alt="cover" />
                <div
                    className="procedure__title">
                    <div
                        className="mt-3 text-uppercase">
                        {title}
                    </div>
                </div>
            </section>
            <div className="container py-5">
                <div className="row">
                    {
                        items.map((item, index) => (
                            <div className="col-md-6 col-lg-4 mb-4">
                                <ItemCard 
                                    image={item.image}
                                    alt={item.alt}
                                    title={item.title}
                                    resume={item.resume}
                                    />
                            </div>
                        ))
                    }
                </div>
            </div>
        </TemplateWrapper2>
    )
}

Procedure.defaultProps = {
    title: "cirugias faciales",
    items: [{
        image: "/img/placeholder-image.png",
        alt: "liposucción de papada",
        title: "liposucción de papada",
        resume: "La liposucción de papada es una cirugía que permite mejorar los ángulos de la cara extrayendo la grasa localizada en la parte inferior de la mandíbula y cuello, logrando un perfilamiento facial estilizado y armonioso."
    }, {
        image: "/img/placeholder-image.png",
        alt: "liposucción de papada",
        title: "liposucción de papada",
        resume: "La liposucción de papada es una cirugía que permite mejorar los ángulos de la cara extrayendo la grasa localizada en la parte inferior de la mandíbula y cuello, logrando un perfilamiento facial estilizado y armonioso."
    }, {
        image: "/img/placeholder-image.png",
        alt: "liposucción de papada",
        title: "liposucción de papada",
        resume: "La liposucción de papada es una cirugía que permite mejorar los ángulos de la cara extrayendo la grasa localizada en la parte inferior de la mandíbula y cuello, logrando un perfilamiento facial estilizado y armonioso."
    }, {
        image: "/img/placeholder-image.png",
        alt: "liposucción de papada",
        title: "liposucción de papada",
        resume: "La liposucción de papada es una cirugía que permite mejorar los ángulos de la cara extrayendo la grasa localizada en la parte inferior de la mandíbula y cuello, logrando un perfilamiento facial estilizado y armonioso."
    }, {
        image: "/img/placeholder-image.png",
        alt: "liposucción de papada",
        title: "liposucción de papada",
        resume: "La liposucción de papada es una cirugía que permite mejorar los ángulos de la cara extrayendo la grasa localizada en la parte inferior de la mandíbula y cuello, logrando un perfilamiento facial estilizado y armonioso."
    }, {
        image: "/img/placeholder-image.png",
        alt: "liposucción de papada",
        title: "liposucción de papada",
        resume: "La liposucción de papada es una cirugía que permite mejorar los ángulos de la cara extrayendo la grasa localizada en la parte inferior de la mandíbula y cuello, logrando un perfilamiento facial estilizado y armonioso."
    }]
}

// export const procedureQuery = graphql`
//   query ProcedurePostByID {
//     allMarkdownRemark(
//         sort: { order: DESC, fields: [frontmatter___date] }
//         filter: { frontmatter: { templateKey: { eq: "procedure" } } }
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//   }
// `
export default Procedure;