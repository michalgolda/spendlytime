import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LinkComponent({ children, link }){
    return(
        <Link to={link ? link : "#"}>
            {children}
        </Link>
    );
}

LinkComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    link: PropTypes.string
}

export default LinkComponent;