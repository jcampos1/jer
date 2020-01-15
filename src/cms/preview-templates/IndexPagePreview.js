import React from 'react'
import PropTypes from 'prop-types'
import { LandingTemplate } from '../../templates/landing';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const { resumeProfile: profile, testimonials } = data;

  if (data) {
    return (
      <LandingTemplate
        resumeProfile={profile} 
        testimonials={testimonials}
        isPreview={true}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
