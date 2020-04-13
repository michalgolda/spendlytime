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
    children: PropTypes.any,
    link: PropTypes.string
}

export default LinkComponent;