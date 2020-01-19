import React from 'react'

const Feature2 = ({
    title,
    style,
    className = "text-uppercase",
    primaryColor = "#001321", 
    secondaryColor = "#007387", 
}) => {
    return (
        <div
            className={`py-4 d-inline-block feature`}>
            <h1 
                className={`mb-0 text-center font-weight-bold ${className}`}
                style={style}>{title}</h1>
            <div className="feature__line mx-auto">
                <div
                    style={{backgroundColor: primaryColor}} 
                    className="d-inline-block feature__line__primary" />
                <div 
                    style={{backgroundColor: secondaryColor}}
                    className="d-inline-block feature__line__secondary" />
            </div>
        </div>
    )
}

export default Feature2;