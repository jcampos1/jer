import React from 'react'
import PropTypes from 'prop-types'
import { LandingTemplate } from '../../templates/landing';

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const { 
    bannerTitle,
    bannerDescription,
    charList,
    contacts,
    video 
  } = data;

  if (data) {
    return (
      <LandingTemplate
        bannerTitle={bannerTitle}
        bannerDescription={bannerDescription}
        charList={charList}
        contacts={contacts}
        video={video}
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