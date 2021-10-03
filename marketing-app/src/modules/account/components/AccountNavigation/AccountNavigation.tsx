import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigatonLinkItem } from 'shared/infrastructure';

import './AccountNavigation.scss';

export interface AccountNavigationProps {
    links: NavigatonLinkItem[]
}

export const AccountNavigation: React.FC<AccountNavigationProps> = props => {
    const { links } = props;

    return <nav className="account-navigation">
        {links.map(link => <NavLink key={link.to} className={({ isActive }) => isActive ? 'active' : ''} to={link.to}>{link.title}</NavLink>)}

    </nav>;
}