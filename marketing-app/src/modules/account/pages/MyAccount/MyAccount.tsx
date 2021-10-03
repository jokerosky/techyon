import { MarketingAppRoutesTree } from 'apps/marketing';
import { AccountNavigation } from 'modules/account/components/AccountNavigation/AccountNavigation';
import React, { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigatonLinkItem } from 'shared/infrastructure';
import { LogoutAction } from 'shared/marketing-app-core/Login';
import { PageLayout } from 'shared/ui-kit/PageLayout/PageLayout';

import './MyAccount.scss';

export interface MyAccountProps {
    logout: LogoutAction
}

export const MyAccount: React.FC<MyAccountProps> = props => {

    const { logout } = props;

    const logoutElement = <p className="logout" onClick={logout}>Logout</p>;
    const navigationLinks = useMemo(() => [
        {
            title: 'Profile',
            to: MarketingAppRoutesTree.account.profile
        },
        {
            title: 'My Plan',
            to: MarketingAppRoutesTree.account.myPlan
        },
        {
            title: 'Billing',
            to: MarketingAppRoutesTree.account.billing
        },
    ] as NavigatonLinkItem[], []);

    return <PageLayout
        showDivider
        headerTitle="My Account"
        headerActions={logoutElement}>

        <AccountNavigation links={navigationLinks} />
        <Outlet />

    </PageLayout>
}

export default MyAccount;