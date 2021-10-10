import React from 'react';
import { NavLink } from 'react-router-dom';

import { MarketingAppRoutesTree } from 'shared/marketing-app-core';
import { PageLayout } from 'shared/ui-kit';

export const CreateAccount: React.FC = props => {
    return <PageLayout headerTitle="Create an account" showBackgound>
        {/* here will be account form */}
        <NavLink to={MarketingAppRoutesTree.singIn}>Sing in</NavLink>
    </PageLayout>
}
export default CreateAccount;