import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

/**
 * This function is setup provider and store for any component.
 *
 * @param {Component} Component - The component for provide
 *
 * @return {Component} Return provided component
 */
export default function Provide(Component){
    return(
        <Provider store={store}>
            <Component />
        </Provider>
    );
}