import React from 'react';

import { ReactComponent as Logo } from 'logo.svg';

import './AppNavbar.scss';
import 'shared/ui-kit/utils.scss';
import { AuthorizedNavSection } from '../AuthorizedNavSection/AuthorizedNavSection';

export interface AppNavbarProps {
    authorized: boolean;
}

export const AppNavbar: React.FC<AppNavbarProps> = props => {
    const { authorized } = props;
    const authorizedNavSection = authorized
        ? <AuthorizedNavSection />
        : null;

    return <div className="app-navbar">
        <Logo className='logo' />
        {authorizedNavSection}
    </div>
}