import React from 'react'
import TemplateWrapper2 from '../components/Layout2'
import ItemCard from '../components/ItemCard'
import { graphql } from 'gatsby';
import Procedures from '../pages/procedure'

const ProcedurePost = ({
    location,
    data
}) => {
    console.log('data :', data);
    const { title, cover, procedures: items } = data.markdownRemark.frontmatter;
    const image = cover.image.childImageSharp.fluid.src;
    console.log('data.markdownRemark.fields.slug :', data.markdownRemark.fields.slug);

    return (
        <TemplateWrapper2 location={location}>
            <section
                id="procedure" 
                className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
                <img 
                    style={{objectFit: "cover"}}
                    className="img-fluid jumbo__cover w-100 position-relative"
                    src={image}
                    alt={cover.alt} />
                <div
                    className="procedure__title">
                    <div
                        className="mt-3 text-uppercase text-center">
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
                                    image={item.image.childImageSharp.fluid.src}
                                    alt={item.alt}
                                    title={item.name}
                                    resume={item.description}
                                    />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Procedures exludeSlug={data.markdownRemark.fields.slug} />
        </TemplateWrapper2>
    )
}

export default ProcedurePost;

export const procedureQuery = graphql`
  query ProcedurePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
        fields {
            slug
        }
      frontmatter {
        title
        cover{
            alt
            image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
        }
        procedures {
            alt
            description
            image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            name
        }
      }
    }

    allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "procedure-post" } } }
      ) {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                    thumbnail{
                        alt
                        image {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                    }
                    procedures {
                        name
                    }
                }
            }
        }
    }
  }
`