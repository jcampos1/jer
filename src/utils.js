export const getImage = (image, key = "image") =>
    image[key].childImageSharp === null ? image[key].publicURL : image[key].childImageSharp.fluid.src