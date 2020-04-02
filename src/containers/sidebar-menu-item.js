import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Icon } from '../components/icon/icon';
import useWindowDimensions from '../hooks/use-window-dimensions';
import {setActiveItemId, closeSidebar} from '../store/actions';

const SidebarMenuItemConnected = ({item, setActiveItemId, closeSidebar}) => {
    const { width } = useWindowDimensions();
    const menuItemClickHandler = () => {
        setActiveItemId(item.id);
        if (width < 768) {
            closeSidebar();
        }
    };
    return (
        <li className='sidebar-menu-item' onClick={menuItemClickHandler}>
            <Icon name='active' className='icon-primary' />
            <span className='sidebar-menu-item-title'>{item.name}</span>
            <Icon name='arrow-right' />
        </li>
    );
};

const mapDispatchToProps = {
    setActiveItemId,
    closeSidebar
};

export const SidebarMenuItem = connect(null, mapDispatchToProps)(SidebarMenuItemConnected);

SidebarMenuItemConnected.propTypes = {
    item: PropTypes.object.isRequired
};
