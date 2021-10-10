import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigatonLinkItem } from 'shared/infrastructure';

import './InternalNavigation.scss';

export interface InternalNavigationProps {
    links: NavigatonLinkItem[]
}

export const InternalNavigation: React.FC<InternalNavigationProps> = props => {
    const { links } = props;

    return <nav className="internal-navigation">
        {links.map(link => <NavLink key={link.to} className={({ isActive }) => isActive ? 'active' : ''} to={link.to}>{link.title}</NavLink>)}
    </nav>;
}