import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import { SidebarMenuItem } from './sidebar-menu-item';

const SidebarConnected = ({items, isSidebarOpened}) => {
    const sidebarClasses = classNames('sidebar', {
        'opened': isSidebarOpened
    });
    return (
        <div className={sidebarClasses}>
            <h2 className='sidebar-title'>Items</h2>
            {items.length &&
                <ul className='sidebar-menu'>
                    {items.map(item => (
                        <SidebarMenuItem key={item.id} item={item} />
                    ))}
                </ul>
            }
        </div>
    );
};

const mapStateToProps = state => ({
    items: state.resources,
    isSidebarOpened: state.isSidebarOpened
});

export const Sidebar = connect(mapStateToProps)(SidebarConnected);
