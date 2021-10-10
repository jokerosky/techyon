import React from 'react';
import { Navigate } from 'react-router-dom';

export interface AuthCheckerProps {
    authorized: boolean;
    redirect: string;
}

export const AuthChecker: React.FC<AuthCheckerProps> = props => {
    const { authorized, redirect, children } = props;
    return authorized ? <>{children}</> : <Navigate to={redirect} />
}