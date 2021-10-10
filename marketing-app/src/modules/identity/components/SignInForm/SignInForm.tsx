import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { MarketingAppRoutesTree } from 'shared/marketing-app-core';

import { LoginAction, LoginModel } from 'shared/marketing-app-core/Login';
import { Button } from 'shared/ui-kit';
import { ChangeEventType, InputElement, InputType } from 'shared/ui-kit';

import './SignInForm.scss';

export interface SignInFormProps {
    login: LoginAction;
}

export const SignInForm: React.FC<SignInFormProps> = props => {
    const { login } = props;

    const [error, setError] = useState<string>(' ');
    const [state, setState] = useState<LoginModel>({
        email: '',
        password: ''
    });

    const onSubmit = useCallback(async (e: React.SyntheticEvent) => {

        const result = await login(state);
        if (!result) { setError('Login unsuccessful'); }

        e.preventDefault();
        return false;
    }, [state, login]);

    const formChange = (field: string) => {
        const cahangeFn: ChangeEventType = e => {
            setState({ ...state, [field]: e.target.value })
        };
        return cahangeFn;
    }

    const forgotLink = <Link tabIndex={3} to={MarketingAppRoutesTree.forgotPassword}>Forgot?</Link>


    return <form onSubmit={onSubmit} className="sign-in-form">

        <InputElement
            type={InputType.text}
            onChange={formChange('email')}
            value={state.email}
            label="Email address"
            tabIndex={1}
        />
        <InputElement
            type={InputType.password}
            onChange={formChange('password')}
            value={state.password}
            label="Password"
            placeholder="Enter your password"
            labelAdornment={forgotLink}
            tabIndex={2} />

        {error}

        <Button color="primary" type="submit">Login</Button>
    </form>

};