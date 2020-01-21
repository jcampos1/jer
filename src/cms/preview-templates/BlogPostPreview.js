import React from 'react'
import PropTypes from 'prop-types'
import { BlogPost2Template } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS()
    console.log('data BLOG POST PREVIEW:', data);
    const {altCover, date, title, author, body} = data;
    const image = data.coverImage;
    // const body = data.html;

    return (
        <BlogPost2Template 
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

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
