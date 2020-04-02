import React from 'react';
import PropTypes from 'prop-types';
import './item-action.scss';

export const ItemAction = ({name}) => {
    return (
        <p className='item-action'>{name}</p>
    );
};

ItemAction.propTypes = {
    name: PropTypes.string.isRequired
};
