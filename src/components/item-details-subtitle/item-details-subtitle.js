import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icon/icon';
import './item-details-subtitle.scss';

export const ItemDetailsSubtitle = ({subtitle}) => {
    return (
        <h3 className='item-details-subtitle'>
            <span>{subtitle}</span>
            <Icon name='help-12' />
        </h3>
    );
};

ItemDetailsSubtitle.propTypes = {
    subtitle: PropTypes.string.isRequired
};
