import React from 'react'
import { Link } from 'gatsby';

const ButtonMore = ({
    style,
    className,
    label,
    icon,
    to
}) => {
    return (
        <Link
            id="link-more" 
            style={style}
            to={to}
            className={className}>
            {label}
            <span
                style={{
                    width: "18px", 
                    height: "18px",
                    color: "white",
                    backgroundColor: "#202335"
                }} 
                className="d-inline-flex align-items-center justify-content-center rounded-circle ml-2">+</span>
        </Link>
    )
}

ButtonMore.defaultProps = {
    style: {backgroundColor: "#17a4d6", color: "#202335", borderRadius: "18px"},
    label: "Ver más",
    className: "btn btn-info font-weight-bold px-4"
}

export default ButtonMore;