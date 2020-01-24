import React from 'react'
import PropTypes from 'prop-types'
import { AdmissionPageTemplate } from '../../templates/admission';

const AdmissionPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  const { 
    section1, 
    section2, 
    section3, 
    section4, 
    section5, 
    section6,
    section7
    } = data;

    console.log('data :', data);


  if (data) {
    return (
      <AdmissionPageTemplate
        section1={section1}
        section2={section2}
        section3={section3}
        section4={section4} 
        section5={section5} 
        section6={section6} 
        section7={section7}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AdmissionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AdmissionPagePreview
