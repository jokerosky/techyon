import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBarItem.scss';


export interface NavBarItemProps {
    to: string;
    icon: ReactElement;
    title: string;
}

export const NavBarItem: React.FC<NavBarItemProps> = props => {
    const { to, icon, title } = props;

    return <NavLink
        to={to}
        title={title}
        className={({ isActive }) => isActive ? 'navbar-item active' : 'navbar-item'} >
        {icon}
    </NavLink>

}