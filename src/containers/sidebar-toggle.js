import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleSidebar } from '../store/actions';

const SidebarToggleConnected = ({ isSidebarOpened, toggleSidebar }) => {
    const sidebarToggleClasses = classNames('sidebar-toggle hamburger', {
        'opened': isSidebarOpened
    });
    return (
        <button className={sidebarToggleClasses} onClick={toggleSidebar}>
            <span className="ham top" />
            <span className="ham middle" />
            <span className="ham bottom" />
        </button>
    );
};

const mapStateToProps = state => ({
    isSidebarOpened: state.isSidebarOpened
});

const mapDispatchToProps = {
    toggleSidebar
};

export const SidebarToggle = connect(mapStateToProps, mapDispatchToProps)(SidebarToggleConnected);
