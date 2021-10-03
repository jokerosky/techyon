import React from 'react';
import { Link } from 'react-router-dom';

import { MarketingAppRoutesTree } from 'apps/marketing';
import { PageLayout } from 'shared/ui-kit/PageLayout/PageLayout';
import { LoginAction } from 'shared/marketing-app-core/Login';
import { SignInForm } from 'modules/identity/components/SignInForm/SignInForm';

import './SignIn.scss';
export interface SignInProps {
    login: LoginAction;
}

export const SignIn: React.FC<SignInProps> = props => {
    const { login } = props;
    return <PageLayout headerTitle="Sign In" showBackgound>
        <div className="sign-in">
            <SignInForm login={login} />
            <div className="signup">New here? <Link to={MarketingAppRoutesTree.createAccount} >Signup</Link></div>
        </div>
    </PageLayout>
}

export default SignIn;