import React from 'react'
import PropTypes from 'prop-types'
import { ProfileTemplate } from '../../templates/profile';

const ProcedurePostPreview = ({ entry, widgetFor }) => {
    console.log('entry.getIn:', entry.getIn(['data']).toJS());
    const data = entry.getIn(['data']).toJS();
    return (<>PREVIEW PROCEDURE POST</>)
}

ProcedurePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProcedurePostPreview
