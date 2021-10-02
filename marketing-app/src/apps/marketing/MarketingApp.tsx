import React, { Suspense, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";

import { Layout } from 'shared/ui-kit/Layout/Layout';
import { AppNavbar } from './navigation/AppNavbar/AppNavbar';
import { AuthChecker } from '../../shared/infrastructure/AuthChecker';

import { marketingAppReducer, MARKETING_APP_INITIAL_STATE } from './reducers/marketingAppReducer';

import { MarketingAppRoutesTree } from './marketingAppRoutes';
import { ErrorBoundary } from 'shared/infrastructure/ErrorBoundary';


export const MarketingApp: React.FC = props => {

    const [state, dispatch] = useReducer(marketingAppReducer, MARKETING_APP_INITIAL_STATE);

    const navbar = <AppNavbar authorized={state.authorized} />;

    const SignIn = React.lazy(() => import('../../modules/identity/pages/SignIn/SignIn'));
    const CreateAccount = React.lazy(() => import('../../modules/identity/pages/CreateAccount/CreateAccount'));

    return (
        <ErrorBoundary>
            <Router>
                <Layout navbar={navbar}>
                    <Suspense fallback={<div>Loading</div>}>
                        <Routes>
                            <Route path={MarketingAppRoutesTree.singIn} element={<SignIn />} />
                            <Route path={MarketingAppRoutesTree.createAccount} element={<CreateAccount />} />

                            <Route path={MarketingAppRoutesTree.createVideo} element={<AuthChecker redirect={MarketingAppRoutesTree.singIn} authorized={state.authorized} >Creaet Vidoe</AuthChecker>} />
                            <Route path={MarketingAppRoutesTree.library} element={<AuthChecker redirect={MarketingAppRoutesTree.singIn} authorized={state.authorized}>Library</AuthChecker>} />

                            <Route path={MarketingAppRoutesTree.account.root} element={<AuthChecker redirect={MarketingAppRoutesTree.singIn} authorized={state.authorized}>Account  <Outlet /></AuthChecker>}>
                                <Route path={MarketingAppRoutesTree.account.profile} element={<>Profile</>} />
                                <Route path={MarketingAppRoutesTree.account.myPlan} element={<>Plan</>} />
                                <Route path={MarketingAppRoutesTree.account.billing} element={<>Billing</>} />

                                <Route path="" element={<Navigate to={MarketingAppRoutesTree.account.profile} replace />} />
                                <Route path="*" element={<Navigate to={MarketingAppRoutesTree.account.profileUrl} replace />} />
                            </Route>

                            <Route path="" element={<Navigate to={MarketingAppRoutesTree.library} replace />} />

                        </Routes>
                    </Suspense>
                </Layout>
            </Router>
        </ErrorBoundary>)

}