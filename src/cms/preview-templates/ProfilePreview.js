import React from 'react'
import PropTypes from 'prop-types'

const ProfilePreview = ({ entry, widgetFor }) => {
    console.log('entry.getIn:', entry.getIn(['data', 'title']));
    return (
        <div>
            PREVIEW
        </div>
    )
}

ProfilePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProfilePreview
