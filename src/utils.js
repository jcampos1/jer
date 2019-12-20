export const getImage = image =>
    image.image.childImageSharp === null ? image.image.publicURL : image.image.childImageSharp.fluid.src