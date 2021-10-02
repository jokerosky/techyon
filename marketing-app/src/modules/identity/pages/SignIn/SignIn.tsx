import React from 'react';
import { Link } from 'react-router-dom';

import { MarketingAppRoutesTree } from 'apps/marketing/marketingAppRoutes';
import { PageLayout } from 'shared/ui-kit/PageLayout/PageLayout';

import './SignIn.scss';

export const SignIn: React.FC = props => {
    return <PageLayout headerTitle="Sign In" showBackgound>
        <div className="sign-in">
            <Link to={MarketingAppRoutesTree.createAccount} > Creae Account</Link>
        </div>
    </PageLayout>
}

export default SignIn;