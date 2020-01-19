import React from 'react'
import PropTypes from 'prop-types'

const ProcedurePostPreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS();
    const { title, cover, procedures: items } = data;
    const image = cover.image;

    return null
}

ProcedurePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProcedurePostPreview
