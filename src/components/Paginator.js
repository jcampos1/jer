import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby';

const Item = ({
    page,
    currentPage
}) => {
    const to = page === 1 ? "/circular-page" : `/circular-page/${page}`;

    return (
        <Link
            className="px-2" 
            to={to}>
            <span 
                style={{
                    width: "15px",
                    height: "15px",
                    backgroundColor: page === currentPage ? "blue" : "#95c11f"
                }} 
                className="d-inline-block border rounded-circle" />
        </Link>
    )
}

const Paginator = ({
    totalItem,
    perPage,
    location
}) => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        let _pages = [];
        for (let index = 0; index < Math.ceil(totalItem / perPage); index++)
            _pages.push(index+1)
        setPages([..._pages])
    }, []);

    const array = location.pathname.split("/");
    let currentPage = 1;
    
    if(array.length > 2) {
        currentPage = parseInt(array[array.length-1])
    }

    if(pages.length === 0)
        return null;

    return (
        <div className="d-flex justify-content-center">
            {
                pages.map((pg, index) => (
                    <Item 
                        key={`page${index}`}
                        page={pg}
                        currentPage={currentPage} />
                ))
            }
        </div>
    )
}

Paginator.defaultProps = {
    perPage: 6
}

export default Paginator;