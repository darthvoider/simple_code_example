import React from 'react';
import { SidebarToggle } from '../../containers/sidebar-toggle';
import useWindowDimensions from '../../hooks/use-window-dimensions';
import './header.scss';

export const Header = () => {
    const { width } = useWindowDimensions();
    return (
        <header className='site-header'>
            {width < 768 && <SidebarToggle />}
            <h1>Demo App</h1>
        </header>
    );
};
