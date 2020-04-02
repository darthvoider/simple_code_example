import React from 'react';
import PropTypes from 'prop-types';
import './item-detail.scss';

export const ItemDetail = ({title, value}) => {
    return (
        <div className='item-detail'>
            <h5 className='item-detail-title'>{title}</h5>
            <p className='item-detail-value'>{value}</p>
        </div>
    );
};

ItemDetail.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};
