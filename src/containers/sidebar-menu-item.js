import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from '../components/icon/icon';
import useWindowDimensions from '../hooks/use-window-dimensions';
import { setActiveItemId, closeSidebar } from '../store/actions';

const SidebarMenuItemConnected = ({ item, setActiveItemId, closeSidebar, activeItemId }) => {
    const { width } = useWindowDimensions();
    const sidebarMenuItemClasses = classNames('sidebar-menu-item', {
        'active': item.id === activeItemId
    });
    const menuItemClickHandler = () => {
        setActiveItemId(item.id);
        if (width < 768) {
            closeSidebar();
        }
    };
    return (
        <li className={sidebarMenuItemClasses} onClick={menuItemClickHandler}>
            <Icon name='active' className='icon-primary' />
            <span className='sidebar-menu-item-title'>{item.name}</span>
            <Icon name='arrow-right' />
        </li>
    );
};

const mapStateToProps = state => ({
    activeItemId: state.activeItemId
});

const mapDispatchToProps = {
    setActiveItemId,
    closeSidebar
};

export const SidebarMenuItem = connect(mapStateToProps, mapDispatchToProps)(SidebarMenuItemConnected);

SidebarMenuItemConnected.propTypes = {
    item: PropTypes.object.isRequired
};
