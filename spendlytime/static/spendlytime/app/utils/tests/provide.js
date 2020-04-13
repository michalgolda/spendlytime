import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { store } from '../../store';

// This function is setup provider and store for any component.
function Provide(Component, props){
    return(
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
}

Provide.propTypes = {
    Component: PropTypes.object.isRequired,
    props: PropTypes.object.isRequired
}

export default Provide;