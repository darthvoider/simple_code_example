import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import icons from './icons/icons.svg';
import './icon.scss';

export const Icon = ({ name, className }) => {
    const iconClasses = classNames('icon', `icon-${name}`, `${className}`);
    return (
        <svg className={iconClasses}>
            <use xlinkHref={`${icons}#${name}`} />
        </svg>
    );
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Icon.defaultProps = {
    className: '',
};
