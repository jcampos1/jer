import React from 'react'
import TemplateWrapper2 from '../components/Layout2'
import ItemCard from '../components/ItemCard'
import { graphql } from 'gatsby';
import Procedures from '../pages/procedure'

export const EducativePostTemplate = ({
}) => {
  return (
    <>
      <section
        id="educative-post" 
        className="jumbotron jumbotron-fluid p-0 m-0 position-relative">
        post a mostrar
      </section>
    </>
  )
}

const EducativePost = ({
    location,
    data
}) => {
    return (
        <TemplateWrapper2 location={location}>
          <EducativePostTemplate />
        </TemplateWrapper2>
    )
}

export default EducativePost;