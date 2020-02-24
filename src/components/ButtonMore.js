import React from 'react'
import { Link } from 'gatsby';

const ButtonMore = ({
    style,
    inlineStyles,
    className,
    label,
    isShowIcon,
    icon,
    to
}) => {
    return (
        <Link
            id="link-more" 
            style={{
                ...style,
                ...inlineStyles
            }}
            to={to}
            className={className}>
            {label}
            {
                isShowIcon && (
                    <span
                        style={{
                            width: "18px", 
                            height: "18px",
                            color: "white",
                            backgroundColor: "#ff7060"
                        }} 
                        className="d-inline-flex align-items-center justify-content-center rounded-circle ml-2">+</span>
                )
            }
        </Link>
    )
}

ButtonMore.defaultProps = {
    style: {backgroundColor: "#17a4d6", color: "#202335", borderRadius: "18px"},
    inlineStyles: {},
    label: "Ver más",
    className: "btn btn-info font-weight-bold px-4",
    isShowIcon: true
}

export default ButtonMore;