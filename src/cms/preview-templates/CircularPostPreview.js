import React from 'react'
import PropTypes from 'prop-types'
import { CircularPostTemplate } from '../../templates/circular-post';

const CircularPostPreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()
    const {altCover, date, title, author, body} = data;
    const image = data.coverImage;

    return (
        <CircularPostTemplate 
            altCover={altCover} 
            date={date} 
            title={title} 
            author={author} 
            image={image} 
            body={body}
            isPreview={true}
        />
    )
}

CircularPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CircularPostPreview